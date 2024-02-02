import StockPlace from "./StockPlace";
import orders from "../../data/orders";
import materials from "../../data/materials";

const StockBox = ({group, type}) => {
    const size = group.length;

    let className = "";
    if (size === 6) {
        className = "vertical-stock-box"
    } else if (size === 8) {
        className = "horizontal-stock-box"
    }

    const places = group.map((place, index) => {
        let palletColor = "#F8F8F8";
        let date;

        if (type === "entry") {
            if (place.material_id !== null) {
                const foundMaterial = materials.find((material) =>
                    place.material_id === material.material_id);
                date = foundMaterial.arriving_date;
                palletColor = foundMaterial.pallet_color;
            }
        } else if (type === "output") {
            if (place.order_id !== null) {
                const foundOrder = orders.find((order) =>
                    place.order_id === order.order_id);
                date = foundOrder.done_date;
                palletColor = foundOrder.pallet_color;
            }
        }

        return (
            <StockPlace key={index} palletColor={palletColor}
                        date={date}/>
        );
    });


    return <div className={`StockBox ${className}`}>
        {places}
    </div>
}

export default StockBox