# Testing
Scenario 1: Verify User Login to the Website with Valid Credentials

Given: The user has the required credentials to log in.
When: The user enters a username and password.
And: Clicks the login button.
Then: The user should be successfully logged in.
And: The user should navigate to the Product Page.
Scenario 2: User Places an Order and Checks Out Successfully

Given: The user is logged into the system.
And: The user is on the Product Page.
When: The user selects a product by clicking the "Add to Cart" button.
And: Clicks on the "Cart" button.
And: Navigates to the "Your Cart" page.
And: Confirms the selected product is added to the cart.
And: Clicks the "Checkout" button.
And: Fills out the checkout information.
And: Clicks the "Continue" button.
And: Clicks the "Finish" button after confirming the order details.
Then: The order should be placed successfully.
And: A "Thank You for Your Order" confirmation message should appear.

Scenario 3: Use Openweather API endpoint and assert the temperature of Islamabad along with success response code.  
