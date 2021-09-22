NB: Initially I did the same thing as Katie and left duplicate data after doing the extension assignment! 

# cinemas
| cinema_id | location      |  
|----|---------------|
| 1  | Leicester Sq. |
| 2  | Curzon St.    |
| 3  | Grafton St.   |

- Primary key: id
- No foreign keys

# screenings
| screening_id | movie_id | start_time | screen_id |
|----|----------|------------|-----------|
| 1  | 1        | 16:00      | 4         |
| 2  | 1        | 17:45      | 1         | 
| 3  | 3        | 19:00      | 2         |
| 4  | 2        | 17:00      | 5         |

- Primary key: id
- Foreign keys: movie_id, ~~cinema_id~~, screen_id

# movies
| movie_id | title      | duration |
|----|------------|----------|
| 1  | Titanic    | 110      |
| 2  | Star Wars  | 125      |
| 3  | Snow White | 119      |

- Primary key: id
- Foreign keys: none of them! 

# screens
| screen_id | cinema_id | seat_count |
|-----------|-----------|------------|
| 1         | 1         | 100        |
| 2         | 1         | 98         | 
| 3         | 1         | 180        |
| 4         | 1         | 150        |
| 5         | 2         | 90         |
| 6         | 2         | 120        |
| 7         | 2         | 220        |
| 8         | 3         | 250        |

- Primary key: id
- Foreign keys: cinema_id 

# bookings
| booking_id | email               | seat_no | screening_id |
|------------|---------------------|---------|--------------|
| 1          | customer1@gmail.com | 49      | 1            |
| 2          | customer2@gmail.com | 50      | 1            | 
| 3          | customer3@gmail.com | 25      | 4            |
| 4          | customer4@gmail.com | 64      | 2            |
| 5          | customer5@gmail.com | 65      | 2            |
| 6          | customer6@gmail.com | 70      | 3            |

- Primary key: id
- Foreign keys: screening_id 

