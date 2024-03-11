/**
 * v0 by Vercel.
 * @see https://v0.dev/t/A7xPxIelEpn
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export default function Component() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-red-600">FIAP Bank</h1>
        <div>
          <span className="text-lg">Account balance</span>
          <span className="text-lg ml-2 font-bold">BRL 3,455.92</span>
        </div>
      </header>
      <section>
        <h2 className="text-xl mb-4">Hello, User name</h2>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-4 rounded-md shadow">
            <div className="flex items-center space-x-2">
              <Button className="bg-green-500 text-white">Withdraw</Button>
              <Input placeholder="1500" />
              <Button className="bg-green-500 text-white">OK</Button>
            </div>
          </div>
          <div className="bg-white p-4 rounded-md shadow">
            <div className="flex items-center space-x-2">
              <Button className="bg-green-500 text-white">Deposit</Button>
              <Input placeholder="0" />
              <Button className="bg-green-500 text-white">OK</Button>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md shadow">
          <h3 className="text-2xl mb-4 font-bold">TRANSACTIONS</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Balance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>#3461</TableCell>
                <TableCell>Withdraw</TableCell>
                <TableCell className="text-red-500">- 1100</TableCell>
                <TableCell>3900</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>#3462</TableCell>
                <TableCell>Deposit</TableCell>
                <TableCell className="text-green-500">+ 100,92</TableCell>
                <TableCell>4000,92</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>#3461</TableCell>
                <TableCell>Withdraw</TableCell>
                <TableCell className="text-red-500">- 1000</TableCell>
                <TableCell>3000,92</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>#3462</TableCell>
                <TableCell>Deposit</TableCell>
                <TableCell className="text-green-500">+ 455</TableCell>
                <TableCell>3455,92</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="mt-8">
        <h3 className="text-2xl mb-4 font-bold">Clients</h3>
        <Button className="bg-red-600 text-white">+ Add client</Button>
      </section>
    </div>
  )
}

