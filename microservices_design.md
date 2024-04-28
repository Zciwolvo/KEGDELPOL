# Concept

App expect user to be in one of 3 groups

## Employee

Employee is a office worker that will handle orders and will assign them two drivers, also one of his tasks will be creating accounts for clients and couriers as well as new employees

## Courier

Courier will be responsible for deliveries from spot A to spot B while noting on his interface his current steps

## Client

Client will be able to create new orders and products

# db

## Employee

## Auth

## Role

## Customer

## Driver

## Order

## Product

## Order_detail

## Vehicle

## Route

## Delivery

## Status

# Microservices

1. **Auth Service**:

   - Manages user authentication and authorization.
   - Handles user login, registration, and token generation.
   - Connects with the Employee, Courier, and Client microservices for user-related operations.

2. **Order Service**:

   - Responsible for managing orders, order details, and order statuses.
   - Handles order creation, modification, and cancellation.
   - Connects with the Client, Employee, and Courier microservices for order-related operations.

3. **Notification Service**:

   - Sends notifications to users (clients, employees, and couriers) about order status updates, delivery assignments, etc.
   - Subscribes to events from the Order Service and other relevant services to trigger notifications.

4. **Client Service**:

   - Handles client-specific functionalities such as creating new orders and managing products.
   - Connects with the Order Service for order-related operations and the Auth Service for user authentication.

5. **Worker Service**:

   - Manages employee accounts and their tasks, including handling orders and assigning them to drivers.
   - Connects with the Order Service for order-related operations and the Auth Service for user authentication.

6. **Courier Service**:

   - Manages courier accounts and their delivery tasks, including tracking delivery status.
   - Connects with the Order Service for order-related operations and the Auth Service for user authentication.

7. **Client UI**:

   - User interface for clients to interact with the application.
   - Communicates with the Client Service for order management and product-related functionalities.

8. **Worker UI**:

   - User interface for employees (office workers) to handle orders and manage tasks.
   - Communicates with the Worker Service for employee-related functionalities.

9. **Courier UI**:

   - User interface for couriers to manage delivery tasks and track delivery status.
   - Communicates with the Courier Service for courier-related functionalities.

10. **Login UI**
    - Allows user to log into their account

Regarding database connectivity:

- Each microservice should have access only to the database tables it needs to perform its functionalities. For example:
  - **Auth Service** will interact with tables related to user authentication (e.g., Auth, Employee, Courier, Customer).
  - **Order Service** will interact with tables related to orders (e.g., Order, Order_detail, Status).
  - **Client Service** will interact with tables related to clients and products (e.g., Client, Product).
  - **Worker Service** will interact with tables related to employees and tasks (e.g., Employee, Order).
  - **Courier Service** will interact with tables related to couriers and deliveries (e.g., Courier, Delivery, Route).

Communication between microservices:

- Use RESTful APIs or message brokers for inter-service communication.
- Each microservice should expose APIs for functionalities it provides and consume APIs from other microservices it depends on.
- Implementing service discovery mechanisms can help microservices locate and communicate with each other dynamically.

Remember to design your microservices to be resilient, scalable, and maintainable. Also, consider implementing security measures such as HTTPS for API communication and proper access controls for database interactions.
