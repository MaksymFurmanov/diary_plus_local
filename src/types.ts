export type Employee = {
    id: string,
    department_id: string,
    name: string,
    position: string,
    date_of_birth: Date
}

export type EmployeeInput = {
    id?: string,
    department_id: string,
    name: string,
    position: string,
    date_of_birth: Date,
    login: string,
    password: string,
    manager: boolean,
    changed: boolean
}

export type User = {
    employee_id: string,
    login: string,
    password: string
}

export type Department = {
    id: string,
    manager_id?: string,
    name: string
}

export type Material = {
    id: string,
    name: string,
    supplier: string,
    date_of_order: Date,
    arriving_date: Date | null,
    per_pallet: number,
    volume: number,
    pallet_color: string
}

export type MaterialInput = {
    id?: string,
    name: string,
    supplier: string,
    date_of_order?: Date,
    arriving_date: Date | null,
    volume: number,
    per_pallet: number,
    pallet_color: string,
    changed: boolean
};

export type Product = {
    id: string,
    name: string,
    type: string,
    per_pallet: number,
    img_url?: string,
    quality_standards_url?: string
}

export type ProductionProcess = {
    id: string,
    product_id: string,
    department_id?: string,
    name: string,
    queue: number,
    done_name?: string
}

export type ProductInput = {
    id?: string,
    name: string,
    type: string,
    per_pallet: number,
    img_url?: string,
    imageDisplay?: string,
    imageFile: File | null,
    quality_standards_url?: string,
    standardsDisplay: string | null,
    standardsFile: File | null,
    productionProcesses: ProductionProcess[]
    changed: boolean
}

export type Order = {
    id: string,
    product_id: string,
    production_process_id: string | null,
    customer: string,
    deadline: Date,
    done_date: Date | null,
    volume: number,
    pallet_color: string
}

export type OrderInput = {
    id?: string,
    product_id: string,
    product_name: string,
    customer: string,
    volume: number,
    deadline: string,
    pallet_color: string,
    changed: boolean
};

export type EntryStockPlace = {
    id: string
    material_id: string | null,
}

export type OutputStockPlace = {
    id: string
    order_id: string | null,
    put_date: Date
};

export type Test = {
    id: string,
    accepted: boolean | null,
    status: 0 | 1 | 2 | 3,
    document_url?: string
}

export type MaterialsTest = {
    material_id: string,
} & Test

export type ProductsTest = {
    order_id: string,
} & Test

export type DashboardType = {
    type: "orders" | "materials"
}

export type TestDisplayData = {
    date: string,
    name: string,
    details: string,
    standardsUrl?: string
}