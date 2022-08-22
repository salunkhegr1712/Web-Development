import http.client

conn = http.client.HTTPSConnection("bfhldevapigw.healthrx.co.in")
payload = "<file contents here>"
headers = {
  'b_name': 'R2hhbmFzaGFtIFJhamFyYW0gU2FsdW5raGU=',
  'name': 'Ghanasham Rajaram Salunkhe',
  'b_reg_no': 'MTExOTAzMDMz',
  'reg_no': '111903033',
  'b_email': 'c2FsdW5raGVncjE5LmNvbXBAY29lcC5hYy5pbg==',
  'email': 'salunkhegr19.comp@coep.ac.in',
  'Content-Type': 'text/plain'
}
conn.request("POST", "/bfl-api-challenge/challenge-entry", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
