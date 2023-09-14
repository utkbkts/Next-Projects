
interface Props{
    amount:number;
}

const FormatPrice = ({amount}:Props)=>{
    const FormatAmount = new Number(amount).toLocaleString("en-US",{
        style:"currency",
        currency:"USD",
        minimumFractionDigits:2,
    })
    return <span>{FormatAmount}</span>
}

export default FormatPrice