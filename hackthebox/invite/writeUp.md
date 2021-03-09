# HackeTheBox Invite Write-Up

1. Check console.

2. Look at the sites scripts.

3. Copy invite code script to debug able IDE.

4. Format code.

5. Run code with debugging.

6. Notice variable p contains a function code.

7. Copy function code to new file.

8. Script describes an HTTP POST request.

9. Run POST request (Insomnia was used) with hackthebox.eu/ as domain preceding POST url.

10. Notice response contains encrypted code, and encryption protocol (ROT13).

11. Decrypt response data.

12. A new HTTP POST url is provided. Submit request to said url.

13. Notice data is encrypted.

14. Try decrypting the data using common encryption methods.

15. Decode data with Base64.

16. Invite code is accessed (flag is captured).
