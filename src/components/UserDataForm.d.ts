import React from 'react';
interface UserData {
    name: string;
    email: string;
    phone: string;
    address: string;
    chartData?: any[];
}
declare const UserDataForm: React.FC<{
    onUpdate: (data: UserData) => void;
}>;
export default UserDataForm;
