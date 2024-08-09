interface OperationType {
    id?: string
    dni: string;
    reference: string;
    mount: string;
    carrier?: string;
    carrierName?: string;
    address?: string;
    delivery?: boolean;
}

interface UserType {
    id?: string
    dni: string;
    fullname: string;
    phone: string;
}