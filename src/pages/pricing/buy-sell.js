/**
 * v0 by Vercel.
 * @see https://v0.dev/t/o8NQeMlgudM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <>
      <div className="flex items-center justify-center bg-gray-50/90 border-t border-b border-gray-200 border-gray-200 dark:bg-gray-950 dark:border-gray-800 dark:border-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-4 grid-cols-1 lg:grid-cols-[1fr_600px] py-12 md:py-16 xl:gap-12 xl:py-20">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter lg:text-5xl">AWO Token</h1>
              <p className="max-w-[500px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The stable coin for the modern web. Buy and sell with confidence.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <div className="flex flex-col gap-1">
                  <Label className="text-base" htmlFor="buy-amount">
                    Amount
                  </Label>
                  <Input id="buy-amount" placeholder="0.00" />
                </div>
                <Button
                  className="flex items-center justify-center w-full lg:w-[200px] bg-green-500 hover:bg-green-600 text-white rounded-full"
                  size="lg"
                >
                  Connect Wallet
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="grid items-center py-12 lg:py-24 xl:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px]">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter lg:text-4xl">Buy AWO Tokens</h2>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <div className="flex flex-col gap-1">
                  <Label className="text-base" htmlFor="buy-amount">
                    Amount
                  </Label>
                  <Input id="buy-amount" placeholder="0.00" />
                </div>
                <div>
                <Button
                  className="flex items-center justify-center w-full lg:w-[200px] bg-green-500 hover:bg-green-600 text-white rounded-full"
                  size="lg"
                >
                  Buy
                </Button>
                </div>
              </div>
              <p className="max-w-[500px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Enter the amount of AWO tokens you want to buy and confirm the transaction.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-12 lg:py-24 xl:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px]">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter lg:text-4xl">Sell AWO Tokens</h2>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <div className="flex flex-col gap-1">
                  <Label className="text-base" htmlFor="sell-amount">
                    Amount
                  </Label>
                  <Input id="sell-amount" placeholder="0.00" />
                </div>
                <div>
                <Button
                  className="flex items-center justify-center w-full lg:w-[200px] bg-red-500 hover:bg-red-600 text-white rounded-full"
                  size="lg"
                >
                  Sell
                </Button>
                </div>
              </div>
              <p className="max-w-[500px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Enter the amount of AWO tokens you want to sell and confirm the transaction.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="grid items-center py-12 lg:py-24 xl:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter lg:text-4xl">Current Price</h2>
            <p className="text-4xl font-semibold tracking-tighter">$1.00</p>
            <p className="text-sm font-medium tracking-wide/0.5 sm:tracking-wide/1.5">Market Trend: Stable</p>
          </div>
        </div>
      </section>
    </>
  )
}

