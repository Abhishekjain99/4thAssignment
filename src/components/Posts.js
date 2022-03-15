const Posts = (props) => {
    var num = parseInt(props.textValue);
    function toUSD()
    {
        var temp = 0.013 * num;
        alert(temp);
    }
    function toEUR()
    {
        var temp = 0.012 * num;
        alert(temp);
    }
    function toGBP()
    {
        var temp = 0.010 * num;
        alert(temp);
    }
    function toAED()
    {
        var temp = 0.048 * num;
        alert(temp);
    }
    function toSAR()
    {
        var temp = 0.049 * num;
        alert(temp);
    }
    return(
        <div>
            <br />
            <br />

            <button onClick={toUSD}>USD</button>
            <button onClick={toEUR}>EUR</button>
            <button onClick={toGBP}>GBP</button>
            <button onClick={toAED}>AED</button>
            <button onClick={toSAR}>SAR</button>
            <br />
            <br />
        </div>
        
    )
}
export default Posts;