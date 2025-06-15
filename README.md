# Photo Sharing App Security Implementation

## Setup Instructions

Follow these steps to set up the Photo Sharing App with SSL security:

1. Clone the repository:
   bash
     git clone (https://github.com/karlnorman/photosharingssl.git)
2. Install dependencies:
   bash
     npm init -y 
     npm install express helmet    
     npm install body-parser 
3. Generate SSL certificates using OpenSSL:
   bash
      brew install openssl
      openssl genrsa -out private.key 2048 
      openssl req -new -key private.key -out request.csr
      openssl x509 -req -days 365 -in request.csr -signkey private.key -out certificate.crt      
4. Run the server:
   bash
      node server.js
   

## SSL Configuration 

   Obtained the following files:
      Self-signed certificate generated using OpenSSL.
      Certificate files: private.key and certificate.crt.

   I chose OpenSSL due to its widespread use and OpenSSL is known to be reliable for generating SSL certificates, 
   especially in local development environments. Additionally, it provides flexibility in configuring various 
   security options as needed.

   I ensured that the server is configured to reference both private.key and certificate.crt when establishing HTTPS connections.

   The most challenging part was configuring the SSL certificate correctly. I resolved it by following detailed documentation 
   and checking the logs for errors.

   
## Caching Strategies

GET /posts: Caches for 5 minutes. (Caching for 5 minutes optimizes performance while allowing for revalidation.  )
GET /posts/:id: Caches individual posts for 5 minutes. (Caching individual posts to ensure quick retrieval without exposing sensitive data.)

Implementing headers improves security by reducing common vulnerabilities. Setting these headers is a proactive measure to protect user 
data and maintain application integrity.

Using middleware like body-parser has become a standard practice in Express applications, making it easier for developers to understand 
and maintain the codebase.

Configuring HTTPS and integrating Helmet required troubleshooting SSL certificate paths. I resolved this by ensuring the correct file 
locations and permissions were set.

For trade-offs, while caching improves performance, I ensured that sensitive data is not cached to prevent unauthorized access.





## Lessons Learned

Encountered issues with SSL configuration; resolved by correcting file paths.
Learned the importance of caching strategies in balancing performance and security.



     
