# 📌 Product Design Requirements (PDR)

## 1️⃣ Library Management System (LMS)
### **Project Overview**
A Library Management System helps manage books, users, borrowing, and returns.

https://github.com/manishkr1754/Library_Management_System_SQL
Here’s a detailed review of your **Library Management System** schema, verifying whether the correct data types are assigned and providing a brief explanation for each field.

---

## ✅ **Corrections & Explanations**
#### **1. Book**
- ✅ `book_id: Number` → **Unique ID for each book.**  
- ✅ `book_title: String` → **Title of the book.**  
- ❌ `category_id: String` → **Should be `Number`** (since it's a foreign key reference).  
- ❌ `publisher_id: String` → **Should be `Number`** (foreign key reference).  
- ❌ `publication_year: Date` → **Better as `Number` (YYYY format)** since it's just a year.  
- ✅ `book_edition: String` → **Edition of the book.**  
- ✅ `copies_total: Number` → **Total number of copies available in the library.**  
- ✅ `copies_available: Number` → **Number of copies currently available for borrowing.**  
- ❌ `location_id: String` → **Should be `Number`** (foreign key reference).  

#### **2. book_auther (Typo: Should be `book_author`)**
- ✅ `book_id: Number` → **References a book.**  
- ❌ `author_id: String` → **Should be `Number`** (foreign key reference).  

#### **3. author (Typo: Should be `author`)**
- ❌ `author_id: String` → **Should be `Number`** (Primary key).  
- ✅ `first_name: String` → **First name of the author.**  
- ✅ `last_name: String` → **Last name of the author.**  

#### **4. category**
- ❌ `category_id: String` → **Should be `Number`** (Primary key).  
- ✅ `category_name: String` → **Category name (e.g., Fiction, Science, History).**  

#### **5. location**
- ❌ `location_id: String` → **Should be `Number`** (Primary key).  
- ✅ `shell_no: String` → **Shelf number where the book is placed.**  
- ✅ `shell_name: String` → **Shelf name for better categorization.**  
- ✅ `floor_no: String` → **Floor number where the book is located.**  

#### **6. publisher**
- ❌ `publisher_id: String` → **Should be `Number`** (Primary key).  
- ✅ `publisher_name: String` → **Name of the publisher.**  
- ✅ `publication_language: String` → **Language of the published books.**  
- ✅ `publication_type: String` → **Type of publication (e.g., Book, Magazine).**  

#### **7. book_issue**
- ✅ `issue_id: String` → **Unique identifier for each book issue transaction.**  
- ✅ `book_id: Number` → **References the book being issued.**  
- ✅ `member_id: Number` → **References the library member borrowing the book.**  
- ✅ `issue_date: Date` → **Date when the book was issued.**  
- ✅ `return_date: Date` → **Due date for returning the book.**  
- ✅ `issue_status: String` → **Status of the issue (e.g., Issued, Returned, Overdue).**  
- ✅ `issued_by_id: String` → **Library staff who issued the book.**  

#### **8. library_staff**
- ✅ `issued_by_id: String` → **Unique ID of the staff member.**  
- ✅ `staff_name: String` → **Name of the staff member.**  
- ✅ `staff_designation: String` → **Role of the staff member in the library.**  

#### **9. member**
- ❌ `member_id: String` → **Should be `Number`** (Primary key).  
- ✅ `first_name: String` → **First name of the member.**  
- ✅ `last_name: String` → **Last name of the member.**  
- ✅ `email_id: String` → **Email ID of the member.**  
- ✅ `mobile_no: String` → **Contact number of the member.**  
- ❌ `city: String` → **Consider making this an enumerated type if you have predefined cities.**  
- ❌ `active_status_id: String` → **Should be `Number`** (Foreign key reference).  

#### **10. book_request**
- ✅ `request_id: String` → **Unique ID for each book request.**  
- ✅ `book_id: Number` → **References the requested book.**  
- ❌ `member_id: String` → **Should be `Number`** (Foreign key reference).  
- ✅ `request_date: Date` → **Date when the request was made.**  
- ✅ `available_status_id: String` → **Status of book availability.**  

#### **11. book_request_status**
- ❌ `available_status_id: String` → **Should be `Number`** (Primary key).  
- ✅ `available_status: String` → **Availability status (e.g., Available, Checked Out).**  
- ✅ `nearest_available_date: Date` → **Estimated date when the book will be available.**  

#### **12. member_status**
- ❌ `active_status_id: String` → **Should be `Number`** (Primary key).  
- ✅ `account_type: String` → **Type of membership (e.g., Student, Faculty).**  
- ✅ `account_status: String` → **Status of membership (e.g., Active, Expired).**  
- ✅ `membership_start_date: Date` → **Start date of the membership.**  
- ✅ `membership_end_date: Date` → **End date of the membership.**  

#### **13. fine_due**
- ✅ `fine_id: String` → **Unique ID for each fine.**  
- ❌ `member_id: String` → **Should be `Number`** (Foreign key reference).  
- ❌ `issued_id: String` → **Should be `Number`** (Foreign key reference).  
- ✅ `fine_date: Date` → **Date when the fine was issued.**  
- ✅ `final_total: Number` → **Total fine amount.**  

#### **14. fine_payment**
- ❌ `fine-payment_id: String` → **Incorrect format (`fine_payment_id`) and should be `Number` (Primary key).**  
- ❌ `member_id: String` → **Should be `Number`** (Foreign key reference).  
- ✅ `payment_date: Date` → **Date when the fine was paid.**  
- ✅ `payment_amount: Number` → **Amount paid for the fine.**  

---

## 🔥 **Final Corrections Summary**
1. **Convert IDs to `Number`** (especially foreign keys like `category_id`, `publisher_id`, `member_id`, etc.).  
2. **Fix `publication_year`** → Change from `Date` to `Number`.  
3. **Fix `fine-payment_id`** → Rename to `fine_payment_id`.  
4. **Use proper primary and foreign key relations** for better database structure.  

Would you like me to suggest an **ER diagram** or **SQL schema** for this? 🚀

### **Core Features**
- **User Management**: Admins, Librarians, Members (Students, Faculty, etc.).
- **Book Management**: Add, update, delete books; categorize by genre, author, etc.
- **Borrow & Return System**: Track issued and returned books.
- **Late Fee Calculation**: Auto-calculate late fees based on return date.
- **Search & Filter**: Search books by title, author, ISBN.
- **Reservation System**: Allow users to reserve books.
- **Reporting**: Generate reports on book availability, user activity.

### **Technology Stack**
- **Frontend**: React.js / Vue.js  
- **Backend**: Node.js (Express) / Django / Spring Boot  
- **Database**: PostgreSQL / MongoDB  
- **Authentication**: OAuth / JWT  
- **Hosting**: AWS / Firebase  

---

## 2️⃣ Parking Lot Management System
# Parking Lot Management System

## Parking_Lot
- lot_id: Number (Unique ID for each parking lot)
- lot_name: String (Name of the parking lot)
- location: String (Address or location of the parking lot)
- total_spaces: Number (Total number of parking spaces available)
- available_spaces: Number (Current available spaces for parking)

## Parking_Space
- space_id: Number (Unique ID for each parking space)
- lot_id: Number (References the parking lot)
- space_number: String (Space identifier within the lot)
- space_type: String (Type: Compact, Standard, Large, Handicapped, etc.)
- is_available: Boolean (Indicates if the space is available)

## Vehicle
- vehicle_id: Number (Unique ID for each vehicle)
- owner_id: Number (References the vehicle owner)
- license_plate: String (Vehicle’s license plate number)
- vehicle_type: String (Type: Car, Bike, Truck, etc.)
- model: String (Vehicle model)
- color: String (Vehicle color)

## Owner
- owner_id: Number (Unique ID for the vehicle owner)
- first_name: String (First name of the owner)
- last_name: String (Last name of the owner)
- email_id: String (Email ID of the owner)
- mobile_no: String (Contact number of the owner)

## Parking_Ticket
- ticket_id: Number (Unique ID for the parking ticket)
- vehicle_id: Number (References the vehicle)
- lot_id: Number (References the parking lot)
- space_id: Number (References the parking space)
- issued_time: Date (Time when the ticket was issued)
- expiry_time: Date (Time when the ticket expires)
- fee_amount: Number (Parking fee charged)
- status: String (Status: Active, Expired, Paid)

## Payment
- payment_id: Number (Unique ID for each payment transaction)
- ticket_id: Number (References the parking ticket)
- owner_id: Number (References the owner who made the payment)
- payment_date: Date (Date when the payment was made)
- payment_amount: Number (Amount paid)
- payment_method: String (Method: Cash, Credit Card, Digital Wallet, etc.)

## Employee
- employee_id: Number (Unique ID for parking lot staff)
- lot_id: Number (References the parking lot they work at)
- first_name: String (First name of the employee)
- last_name: String (Last name of the employee)
- email_id: String (Email ID of the employee)
- mobile_no: String (Contact number of the employee)
- role: String (Role: Attendant, Manager, Security, etc.)
- shift_timing: String (Shift timing: Morning, Evening, Night)

## Parking_Reservation
- reservation_id: Number (Unique ID for each reservation)
- owner_id: Number (References the owner making the reservation)
- vehicle_id: Number (References the vehicle being reserved)
- lot_id: Number (References the parking lot)
- space_id: Number (References the reserved parking space)
- start_time: Date (Reservation start time)
- end_time: Date (Reservation end time)
- reservation_status: String (Status: Pending, Confirmed, Cancelled)

## Parking_Fine
- fine_id: Number (Unique ID for each parking fine)
- ticket_id: Number (References the parking ticket)
- owner_id: Number (References the vehicle owner)
- fine_date: Date (Date when the fine was issued)
- fine_reason: String (Reason for fine: Overstay, Illegal Parking, etc.)
- fine_amount: Number (Total fine amount)
- fine_status: String (Status: Unpaid, Paid)

## Parking_Log
- log_id: Number (Unique ID for each log entry)
- vehicle_id: Number (References the vehicle entering or exiting)
- lot_id: Number (References the parking lot)
- entry_time: Date (Time when the vehicle entered the lot)
- exit_time: Date (Time when the vehicle exited the lot)
- duration: Number (Total time parked in minutes)

### **Project Overview**
A system to manage parking slots, vehicle entries/exits, and payments.

### **Core Features**
- **Slot Management**: Check available slots in real-time.
- **Vehicle Entry/Exit Tracking**: Record when vehicles enter and leave.
- **Pricing System**: Calculate charges based on duration.
- **Online Booking**: Allow users to book slots in advance.
- **License Plate Recognition** (Optional AI feature).
- **Payment Integration**: UPI, Credit Card, Wallet.
- **Admin Dashboard**: View parking analytics & reports.

### **Technology Stack**
- **Frontend**: React.js / Angular  
- **Backend**: Node.js / FastAPI  
- **Database**: MySQL / MongoDB  
- **IoT Integration**: RFID/NFC sensors for smart parking  
- **Hosting**: AWS / GCP  

---

## 3️⃣ Learnyst (White-Labeled LMS)
# Learnyst - White-Labeled LMS
https://www.edrawmax.com/templates/er-diagram-for-e-learning-management-system-1058801/

## Platform
- platform_id: Number (Unique ID for each Learnyst setup)
- platform_name: String (Name of the branded platform)
- domain: String (Custom website domain)
- owner_id: Number (References the platform owner)
- branding_enabled: Boolean (Indicates if custom branding is enabled)
- mobile_app: Boolean (Indicates if a branded mobile app is available)

## Course
- course_id: Number (Unique ID for each course)
- platform_id: Number (References the platform offering the course)
- course_name: String (Title of the course)
- category_id: Number (References the course category)
- instructor_id: Number (References the instructor)
- price: Number (Course price, if applicable)
- content_access: String (Type of access: Lifetime, Subscription, One-time)
- course_status: String (Status: Draft, Published, Archived)

## Instructor
- instructor_id: Number (Unique ID for each instructor)
- platform_id: Number (References the platform they belong to)
- first_name: String (First name of the instructor)
- last_name: String (Last name of the instructor)
- email_id: String (Instructor's email address)
- mobile_no: String (Instructor's contact number)
- expertise: String (Area of expertise)

## Student
- student_id: Number (Unique ID for each student)
- platform_id: Number (References the platform they are enrolled in)
- first_name: String (First name of the student)
- last_name: String (Last name of the student)
- email_id: String (Student's email address)
- mobile_no: String (Student's contact number)
- enrollment_status: String (Status: Active, Suspended, Completed)

## Course_Enrollment
- enrollment_id: Number (Unique ID for each course enrollment)
- student_id: Number (References the enrolled student)
- course_id: Number (References the course)
- enrollment_date: Date (Date when the student enrolled)
- progress: Number (Percentage of course completion)
- completion_status: String (Status: Ongoing, Completed, Dropped)

## Category
- category_id: Number (Unique ID for each course category)
- category_name: String (Name of the course category)

## Payment
- payment_id: Number (Unique ID for each payment transaction)
- student_id: Number (References the student making the payment)
- course_id: Number (References the purchased course)
- payment_date: Date (Date when the payment was made)
- payment_amount: Number (Amount paid)
- payment_method: String (Payment mode: Credit Card, UPI, PayPal, etc.)
- payment_status: String (Status: Pending, Completed, Failed)

## Assessment
- assessment_id: Number (Unique ID for each assessment)
- course_id: Number (References the course)
- student_id: Number (References the student taking the assessment)
- score: Number (Score obtained in the assessment)
- assessment_date: Date (Date of the assessment)
- assessment_type: String (Type: Quiz, Assignment, Exam)

## Content
- content_id: Number (Unique ID for each content item)
- course_id: Number (References the course)
- content_type: String (Type: Video, PDF, Quiz, Assignment)
- content_title: String (Title of the content)
- content_duration: Number (Duration in minutes, if applicable)
- access_status: String (Status: Free, Paid, Locked)

## Discussion
- discussion_id: Number (Unique ID for each discussion thread)
- course_id: Number (References the course)
- student_id: Number (References the student posting)
- message: String (Message content)
- posted_date: Date (Date when the message was posted)

## Support_Ticket
- ticket_id: Number (Unique ID for each support request)
- student_id: Number (References the student raising the ticket)
- issue_description: String (Details of the issue)
- ticket_status: String (Status: Open, In Progress, Resolved)
- resolution_date: Date (Date when the issue was resolved, if applicable)



### **Project Overview**
A **white-labeled** learning management system (LMS) for creating and selling online courses.

### **Core Features**
- **Course Creation**: Upload videos, PDFs, quizzes.
- **User Enrollment**: Students can enroll and track progress.
- **Live Classes**: Zoom/Google Meet Integration.
- **Certification**: Auto-generate certificates after course completion.
- **Payment Integration**: Stripe, Razorpay for course purchases.
- **Mobile App Support**: White-labeled apps with branding.
- **Multi-Tenant Architecture**: One backend serving multiple institutions.

### **Technology Stack**
- **Frontend**: React.js (Web), Flutter (Mobile)  
- **Backend**: Node.js (NestJS) / Django  
- **Database**: PostgreSQL / Firebase  
- **Cloud Storage**: AWS S3 / Google Cloud Storage  
- **Video Streaming**: AWS IVS / MUX  

---

## 4️⃣ Hospital Management System (With Ambulance Tracking)
### **Project Overview**
A system to **manage hospital operations, patient records, and real-time ambulance tracking**.

### **Core Features**
- **Patient Management**: Register patients, update medical history.
- **Doctor Management**: Assign doctors to patients, schedule appointments.
- **Billing System**: Auto-generate bills for treatment & medicines.
- **Inventory Management**: Track medicines, supplies, and availability.
- **Ambulance Tracking**: GPS-based real-time tracking.
- **Emergency Alerts**: Notify nearest ambulances in case of emergencies.
- **Lab Test & Reports**: Upload test results, provide online access.

### **Technology Stack**
- **Frontend**: React.js / Vue.js (Admin & Patient Portal)  
- **Backend**: Node.js (Express) / FastAPI  
- **Database**: PostgreSQL / Firebase  
- **GPS Tracking**: Google Maps API / OpenStreetMap  
- **Hosting**: AWS / Azure  

---

## 5️⃣ Food Delivery App (With Real-Time Rider Tracking)
### **Project Overview**
A **food ordering & delivery app** where customers can order food and track the delivery rider in real-time.

### **Core Features**
- **User Authentication**: Customers, Restaurants, and Riders.
- **Restaurant Listings**: Browse menus, filter by cuisine, location.
- **Order Placement & Tracking**: Real-time order status updates.
- **Live Rider Tracking**: Show the real-time location of the delivery person.
- **Payment Gateway**: Integrate Stripe, PayPal, UPI.
- **Reviews & Ratings**: Users can rate restaurants and riders.
- **Push Notifications**: Alerts for order updates and promotions.

### **Technology Stack**
- **Frontend**: React Native (Mobile), Next.js (Web)  
- **Backend**: Node.js (NestJS) / Django  
- **Database**: PostgreSQL / Firebase  
- **GPS & Maps**: Google Maps API / Mapbox  
- **Hosting**: AWS Lambda / Firebase Functions  

---

## 6️⃣ Amazon-Style E-Commerce System
### **Project Overview**
An **Amazon-like** online shopping platform with multiple sellers, product listings, and secure payments.

### **Core Features**
- **User Management**: Customers, Sellers, Admins.
- **Product Catalog**: Upload products, categories, filters.
- **Shopping Cart & Checkout**: Save items, apply discounts, purchase.
- **Payment Processing**: Support Credit Cards, UPI, PayPal.
- **Order Management**: Track order status from processing to delivery.
- **Reviews & Ratings**: Customers can rate & review products.
- **Recommendation Engine**: AI-powered suggestions.
- **Delivery Partner Integration**: Shiprocket, FedEx API.

### **Technology Stack**
- **Frontend**: React.js (Web), React Native (Mobile)  
- **Backend**: Node.js (Express) / Django  
- **Database**: PostgreSQL / MongoDB  
- **Payment Gateway**: Stripe / Razorpay  
- **Hosting**: AWS / Firebase  

---

## 🚀 Summary Table

| **System** | **Key Features** | **Tech Stack** |
|------------|-----------------|---------------|
| **Library Management** | Book catalog, issue/return, fine system | React, Node.js, PostgreSQL |
| **Parking Lot** | Slot booking, entry/exit, payments | React, FastAPI, IoT (RFID) |
| **White-Labeled LMS** | Course creation, live classes, payments | React, Django, Firebase |
| **Hospital Management** | Patient records, billing, ambulance tracking | Vue.js, Node.js, PostgreSQL |
| **Food Delivery** | Order tracking, real-time rider tracking | React Native, Firebase, Maps API |
| **Amazon E-Commerce** | Product listings, payments, delivery tracking | React, Node.js, MongoDB |

---

## 🔥 Next Steps
- **Choose a project** based on your interest.  
- **Start small**, build the core features first.  
- **Use mock APIs** (like JSONPlaceholder) to test your frontend before setting up a backend.  
- **Deploy your project** using AWS, Firebase, or Vercel.  

💡 **Need help choosing one? Let me know which one excites you the most! 🚀**
