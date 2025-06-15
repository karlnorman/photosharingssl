# Photo Sharing App Security Implementation

## Setup Instructions

1. Clone the repository:
   bash
     git clone <repository-url>

2. Install dependencies:
   bash
     npm init -y 
     npm install express helmet     

3. Generate SSL certificates using OpenSSL:
   bash
      brew install openssl
      openssl genrsa -out private.key 2048 
      openssl req -new -key private.key -out request.csr
      openssl x509 -req -days 365 -in request.csr -signkey private.key -out certificate.crt
      
4. Run the server:
   bash
      node server.js





     
