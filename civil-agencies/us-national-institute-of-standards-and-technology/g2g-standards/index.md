# G2G Standards

The NIST will be responsible for all G2G standards between civil agencies. This includes not only the specifications between governments, but also security standards between the systems, and approval of application containers of government products.

## Security

### Setup

The parent government agency or general administration (for top-level agencies) will goto homeland security and deploy a container for a newly created government agency based on their application provider choice once it has been approved.

Homeland Security will send a certificate to NTIS where the certificate will be injected to the container's /certificate directory.

### Government to Government Security

1. Initiation: A police department initiates an HTTPS secure communication request to the FBI by sending a handshake key along with the their .gov domain name.

2. Verification Callback: The FBI uses the provided domain to issue a callback, returning the original handshake key to verify authenticity and trust in the communication channel.

3. Certificate Exchange: The police department responds with a digital certificate associated from homeland security with the domain, and a JWT and expiration. When the JWT expires, a handshake process must re-occur.

4. Certificate Validation: The FBI validates the digital certificate by checking with homeland security by its ID and domain.

The license ID from Homeland Security would be : laguna-pd.doj.gov:323223
