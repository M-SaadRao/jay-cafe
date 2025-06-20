export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options).replace(',', '');
    return formattedDate.replace(',', ', ');
};
export const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    let hours12 = (+hours % 12) || 12; // Convert to 12-hour format
    const period = +hours < 12 ? 'AM' : 'PM';

    // Pad single digit hours with leading zero
    hours12 = hours12 < 10 ? `0${hours12}` : hours12;

    return `${hours12}:${minutes} ${period}`;
};

export const getEmailTemplate = (info) => {

    const year = new Date().getFullYear();

    let orderItemsHtml = ``;

    info.order_details.forEach((item, index) => {
        orderItemsHtml += `
        <h4 style="margin-bottom: 10px;">Item No ${index + 1}</h4>
        <table class="order-info">
            <tr>
                <th>Product Name</th>
 				<td>${item.productName}</td>
            </tr>
            <tr>
                <th>Quantity</th>
                <td>${item.quantity}</td>
            </tr>
            <tr>
                <th>Price</th>
                <td>${item.productPrice} * ${item.quantity} = ${+item.productPrice * +item.quantity}</td>
            </tr>
        </table>
        `
    })

    return `

    
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Info</title>
    <style>
    body {
        font-family: Arial, sans-serif;
        background-color: #f7f7f7;
        margin: 0;
        padding: 0;
    }

    .email-container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 20px;
        color: #333333;
    }

    .logo-container {
        text-align: center;
        padding: 20px 0;
    }

    .logo-container img {
        max-width: 150px;
    }

    .heading {
        font-size: 24px;
        font-weight: bold;
        color: #1D6CB6; /* Updated primary color */
        text-align: center;
        margin-bottom: 20px;
    }

    .order-info {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    .order-info th, .order-info td {
        border: 1px solid #FF1734; /* Updated border color */
        padding: 10px;
        text-align: left;
    }

    .order-info th {
        background-color: #1D6CB6; /* Updated primary color */
        color: white;
    }

    .total {
        font-weight: bold;
        text-align: right;
    }

    .highlight {
        color: #1D6CB6; /* Updated primary color */
        font-weight: bold;
    }

    .instructions {
        margin-top: 20px;
        padding: 15px;
        background-color: #FEF6E9;
        border-left: 5px solid #1D6CB6; /* Updated primary color */
        color: #555555;
    }

    .footer {
        margin-top: 30px;
        padding-top: 20px;
        border-top: 1px solid #dddddd;
        text-align: center;
        font-size: 12px;
        color: #888888;
        background-color: #f1f1f1;
        padding: 20px;
    }

    .footer a {
        color: #1D6CB6; /* Updated primary color */
        text-decoration: none;
        font-weight: bold;
    }

    .footer a:hover {
        text-decoration: underline;
    }

    a.visit-button {
        display: inline-block;
        background-color: #1D6CB6; /* Updated primary color */
        color: white !important;
        padding: 5px 10px;
        text-align: center;
        text-decoration: none;
        border-radius: 4px;
        font-weight: bold;
        margin-top: 10px;
    }

    .visit-button:hover {
        background-color: #155a8a; /* Darker shade on hover */
    }

    .social-icons {
        margin: 20px 0;
    }

    .social-icons img {
        width: 24px;
        margin: 0 10px;
    }

    .footer small {
        display: block;
        margin-top: 10px;
        color: #999999;
    }

    @media (max-width: 600px) {
        .email-container {
            padding: 10px;
        }

        .order-info th, .order-info td {
            padding: 8px;
        }

        .instructions {
            padding: 10px;
        }

        .footer {
            padding: 10px;
        }
    }
    </style>
</head>
<body>

    <div class="email-container">

        <!-- Logo Section -->
        <div class="logo-container">
            <img src="https://img1.wsimg.com/isteam/ip/b5dd7073-e40b-49ac-9330-5b12f5680024/blob.png/:/rs=w:200,h:200,cg:true,m/cr=w:200,h:200/qt=q:95" alt="Logo">
        </div>

        <!-- Heading -->
        <h1 class="heading">Order Info</h1>

        <!-- Order Details Table -->
        <table class="order-info">
            <tr>
                <th>Full Name</th>
                <td>${info.fullname}</td>
            </tr>
            <tr>
                <th>Phone</th>
                <td>${info.phone}</td>
            </tr>
            <tr>
                <th>Address</th>
                <td>${info.address}</td>
            </tr>
        </table>

        <!-- Order Details -->
        <h2 class="heading" style="margin-top: 30px;">Order Details</h2>

            ${orderItemsHtml}

        <!-- Total Amount -->
        <p class="total">Total Amount: <span class="highlight">$${info.amount}</span></p>

        <!-- Instructions Section -->
        <div class="instructions">
            <strong>Special Instructions:</strong> ${info.instructions}
        </div>

        <!-- Footer Section -->
        <div class="footer">
            <p>The Plaster Family has been in the restaurant business for 33 years. Out of frustration, we started The Jay Café.</p>
            
            <!-- Visit Site Button -->
            <a href="https://thejaycafe.com" class="visit-button">Visit Site</a>
            
            <!-- Footer Copyright -->
            <small>&copy; ${year} The Jay Cafe. All rights reserved.</small>
        </div>

    </div>

</body>
</html>

    



    `
}