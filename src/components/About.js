const About = () => {
    return ( 
        <div style={{textAlign: 'center'}}>
            <h1><center>About Page</center></h1>
            <p>
            This page is built for converting Indian Rupees to five other currencies
            </p>
            <p>Here is a List of currencies into which we can convert.</p>
            <center>
            <table >
                <tr>
                    <th>USD (1 USD = 76.43000)</th>
                </tr>
                <br />
                <tr>
                    <th>EUR (1 EUR = 83.64900)</th>
                </tr>
                <br />
                <tr>
                    <th>GBP (1 GBP = 99.65900)</th>
                </tr>
                <br />
                <tr>
                    <th>AED (1 AED = 20.80360)</th>
                </tr>
                <br />
                <tr>
                    <th>SAR (1 SAR = 20.35850)</th>
                </tr>
                <br />
                <br />
                <br />
                <a href = "https://www.goodreturns.in/currency/world-currencies-vs-indian-rupee-inr.html">Read More About Currency Conversion</a>
            </table>
            </center>          
            <div>
            </div>
        </div>       
    );
}
export default About;