# Parking Lot Management System

## Parking_Lot
- lot_id: Number
- lot_name: String
- location: String
- total_spaces: Number
- availble_space: Number

## Parking_space
- space_id: Number
- lot_id: Number
- space_number: String
- space_type: String
- is_available: boolean

## vehicle
- vehicle_id:number
- owner_id: Number
- license_plate: String
- vehicle_type: String
- model: String
- color: String

## Owner
- owner_id: Number
- first_name: String
- last_name: String
- email_id: String
- mobile_no: String

## Parking_Ticket
- ticket_id: Number
- vehicle_id: Number
- lot_id: Number
- space_id: Number
- issued_time: Date
- expiray_time: Date
- fee_amount: Number
- status: String

## Payment 
- payment_id: Number
- ticket_id: Number
- Owner_id: Number
- payment_date: Date
- payment_amount: Number
- payment_method: String

## Employee(parking lot staff)
- employee_id: Number
- lot_id: Number
- first_name: String
- last_name: String
- email_id: String
- mobile_no: Number
- role: String
- shift_timing :String


## Parking_Fine
- fine_id: Number
- ticket_id:Number
- owner_id: Number
- fine_date: Date
- fine_reason: String
- fine_amount: Number
- fine_status: String


## parking_lot
- log_id: Number
- vehicle_id: Number
- lot_id: Number
- entry_time: Date
- exit_time: Date
- duration: Number







