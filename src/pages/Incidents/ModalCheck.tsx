import React from "react";
import { useState } from "react";
export interface ModalCheckProps {

}

function ModalCheck(props: ModalCheckProps) {
    return (
        <div
            className="w-100 h-100px my-10px px-10px py-4 border border-gray-400 shadow rounded-sm cursor-pointer bg-red"
        >
            <span className="self-center text-15px">You do not have a ServiceNow account. Please contact your administrator for further details!</span>
            <button
                className="flex border-2 border-gray-900 w-24 h-40px mt-20px flex justify-center items-center self-end rounded-5px mr-10px cursor-pointer space-x-1"
            >
                <span className="self-center text-15px">Ok</span>
            </button>
        </div>
    );
}

export default ModalCheck;
