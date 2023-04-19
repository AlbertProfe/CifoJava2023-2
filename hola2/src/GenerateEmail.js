

export default function generateEmail(name) {

  const domains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"];
  const randomIndex = Math.floor(Math.random() * domains.length);
  const domain = domains[randomIndex];

  const email = `${name.toLowerCase().replace(/\s+/g, ".")}.${Math.floor(
    Math.random() * 10000)}@${domain}`;

    
  return email;
}
