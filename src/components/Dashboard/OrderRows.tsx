import {FaPen} from "react-icons/fa";
import {BiSolidTrashAlt} from "react-icons/bi";
import {Order, Product, ProductionProcess} from "../../types";
import {useUser} from "../../providers/UserProvider";
import {useNavigate} from "react-router-dom";
import {isManager} from "../../utils/storage/departments";
import {useDispatch, useSelector} from "react-redux";
import {removeOrder, selectOrders} from "../../features/ordersSlice";
import {selectProducts} from "../../features/productsSlice";
import {selectProductionProcesses} from "../../features/productionProcessesSlice";
import store from "../../state";

const getStatus = (
    productionProcessId: string | null
): string => {
    if (!productionProcessId) return "Start of production";

    const state = store.getState();
    const productionProcesses = selectProductionProcesses(state);

    const productionProcess = productionProcesses
        ?.find((productionProcess: ProductionProcess) =>
            productionProcess.id === productionProcessId
        );
    if (!productionProcess) return "Not found production process";

    return productionProcess.done_name
        || `${productionProcess.queue} process done`;
}

const OrderRows = () => {
    const {user} = useUser();
    if (!user) throw new Error("User not found");
    const manager = isManager(user.employee_id, ["2"]);

    const navigate = useNavigate();

    const orders = useSelector(selectOrders);
    const products = useSelector(selectProducts);

    return (
        <>
            {orders && orders.map((order: Order, index) => {
                const product = products?.find((product: Product) =>
                    product.id === order.product_id);
                if (!product) throw new Error("Product not found in the order"
                    + order.customer
                    + order.deadline
                );

                const status = getStatus(order.production_process_id);
                console.log("Order", order)

                return (
                    <tr key={index}>
                        <td>{product.name}</td>
                        <td>{product.type}</td>
                        <td>{order.customer}</td>
                        <td>{status}</td>
                        <td>{order.volume}</td>
                        <td>{order.deadline.toString().slice(0, 10)}</td>
                        {manager && (
                            <td>
                                <div>
                                    <button onClick={() =>
                                        navigate(`/orders/${order.id}`)}
                                    >
                                        <FaPen/>
                                    </button>
                                    <DeleteButton orderId={order.id}/>
                                </div>
                            </td>
                        )}
                    </tr>
                )
            })}
        </>
    )
}

const DeleteButton = ({orderId}: { orderId: string }) => {
    const dispatch = useDispatch();

    return (
        <button onClick={() => {
            dispatch(removeOrder(orderId))
        }}>
            <BiSolidTrashAlt/>
        </button>
    );
}

export default OrderRows;