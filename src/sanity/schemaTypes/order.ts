

export default {
    name:"order",
    type:"object",
    title:"Order",
    fields :[
        {
            name : "firstName",
            title : "First Name",
            type : "string",
        },
        {
            name : "lastName",
            title : "Last Name",
            type : "string",
        },
        {
            name: "address",
            title: "Address",
            type: "string",
        },
        {
            name:"city",
            title:"City",
            type:"string",
        },
        {
            name:"zipCode",
            title:"Zip Code",
            type:"number",
        },
        {
            name:"discount",
            title:"Discount",
            type:"number",
        },
        {
            name:"phone",
            title:"Phone",
            type:"number",
        },
        {
            name:"email",
            title:"Email",
            type:"string",
        },
        {
            name:"cartitems",
            title:"Cart Items",
            type:"array",
            of:[{ type : "reference", to : {type:'product'}}]        
        },
        {
            name:"total",
            title:"Total",
            type:"number",
        },
        {
            name:"status",
            title:"Order Status",
            type:"string",
            options : {
                list:[
                    {title:"Pending", value:"pending"},
                    {title:"Success", value:"success"},
                    {title:"Dispatch", value:"Dispatch"}
                ],
             layout : "radio" 
            },
            initialvalue : "pending" 
        },
        
    ]
}