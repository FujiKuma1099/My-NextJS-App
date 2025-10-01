import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function listInvoices() {
	// const data = await sql`
  //   SELECT invoices.amount, customers.name
  //   FROM invoices
  //   JOIN customers ON invoices.customer_id = customers.id
  //   WHERE invoices.amount = 666;
  // `;
  const data = await sql`
  SELECT customers.name
    FROM customers
    WHERE customers.name = 'Amy Burns';
  `;

	return data;
}

export async function GET() {
  const invoices = await listInvoices();

  return Response.json(invoices);
}
