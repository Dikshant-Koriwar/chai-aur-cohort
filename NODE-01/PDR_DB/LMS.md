# Library Management System

## Book

- book_id: Number
- book_title: String
- category_id: Number
- publisher_id: Number
- publication_year: Number
- book_edition: String
- copies_total: Number
- copies_available: Number
- location_id: NUmber

## book_auther

- book_id: Number
- author_id: Number

## auther

- author_id : Number
- first_name: String
- last_name: String

## category

- category_id: Number
- category_name: String

## location

- location_id: Number
- shell_no: String
- shell_name: String
- floor_no: String

## publisher

- publisher_id: Number
- publisher_name: String
- publication_language: String
- publication_type: String

## book_issue

- issue_id: String
- book_id: Number
- member_id: Number
- issue_date: Date
- return_date: Date
- issue_status: String
- issued_by_id: String

## library_staff

- issued_by_id: String
- staff_name: String
- staff_designation: String

## member

- member_id: Number
- first_name: String
- last_name: String
- email_id: String
- mobile_no: String
- city: String //enum
- active_status_id: Number

## book_request
- request_id: String
- book_id: Number
- member_id: Number
- request_date: Date
- available_status_id: String

## book_request_status
- available_status_id: Number
- available_status: String
- nearest_available_date: Date

## member_status
- active_status_id: Number
- account_type: String
- account_status: String
- membership_start_date: Date
- membership_end_date: Date

## fine_due
- fine_id:String
- member_id: Number
- issued_id: Number
- fine_date: Date
- final_total: Number

## fine_payment
- fine_payment_id: Number
- member_id: Number
- payment_date: Date
- payment_amount: Number







###

/*
# Library Management System

## Book
- book_id: Number (Unique ID for each book)
- book_title: String (Title of the book)
- category_id: Number (References a book category)
- publisher_id: Number (References the publisher)
- publication_year: Number (Year the book was published)
- book_edition: String (Edition of the book)
- copies_total: Number (Total copies of the book)
- copies_available: Number (Available copies for borrowing)
- location_id: Number (References book's physical location)

## Book_Author
- book_id: Number (References a book)
- author_id: Number (References an author)

## Author
- author_id: Number (Unique ID for the author)
- first_name: String (First name of the author)
- last_name: String (Last name of the author)

## Category
- category_id: Number (Unique ID for the category)
- category_name: String (Name of the category)

## Location
- location_id: Number (Unique ID for the location)
- shelf_no: String (Shelf number where the book is placed)
- shelf_name: String (Shelf name for better organization)
- floor_no: String (Floor number where the book is located)

## Publisher
- publisher_id: Number (Unique ID for the publisher)
- publisher_name: String (Name of the publisher)
- publication_language: String (Language of published books)
- publication_type: String (Type of publication: Book, Journal, etc.)

## Book_Issue
- issue_id: String (Unique ID for each book issue transaction)
- book_id: Number (References the issued book)
- member_id: Number (References the borrowing member)
- issue_date: Date (Date when the book was issued)
- return_date: Date (Due date for returning the book)
- issue_status: String (Status: Issued, Returned, Overdue)
- issued_by_id: Number (References the staff member who issued the book)

## Library_Staff
- issued_by_id: Number (Unique ID for library staff)
- staff_name: String (Name of the staff member)
- staff_designation: String (Role of the staff in the library)

## Member
- member_id: Number (Unique ID for the library member)
- first_name: String (First name of the member)
- last_name: String (Last name of the member)
- email_id: String (Email ID of the member)
- mobile_no: String (Contact number of the member)
- city: String (City where the member resides)
- active_status_id: Number (References the membership status)

## Book_Request
- request_id: String (Unique ID for the book request)
- book_id: Number (References the requested book)
- member_id: Number (References the requesting member)
- request_date: Date (Date when the request was made)
- available_status_id: Number (References availability status)

## Book_Request_Status
- available_status_id: Number (Unique ID for availability status)
- available_status: String (Status: Available, Checked Out, etc.)
- nearest_available_date: Date (Estimated date when the book will be available)

## Member_Status
- active_status_id: Number (Unique ID for the membership status)
- account_type: String (Type of membership: Student, Faculty, etc.)
- account_status: String (Status: Active, Expired, Suspended)
- membership_start_date: Date (Start date of the membership)
- membership_end_date: Date (End date of the membership)

## Fine_Due
- fine_id: String (Unique ID for the fine)
- member_id: Number (References the fined member)
- issued_id: Number (References the issued book transaction)
- fine_date: Date (Date when the fine was issued)
- final_total: Number (Total amount of the fine)

## Fine_Payment
- fine_payment_id: Number (Unique ID for each fine payment)
- member_id: Number (References the paying member)
- payment_date: Date (Date when the fine was paid)
- payment_amount: Number (Amount paid for the fine)

*/