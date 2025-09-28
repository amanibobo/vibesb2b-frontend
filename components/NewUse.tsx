import { Card, CardContent } from "@/components/ui/card"

export default function NewUse() {
  return (
    <div className="w-full max-w-7xl mx-auto py-28 space-y-40">
      {/* Step 1 */}
      <div className="grid gap-16 md:grid-cols-2">
        <div className="space-y-4">
          <h2 
          style={{ fontFamily: "var(--font-pp-editorial-new)" }}
          className="text-3xl sm:text-4xl font-ultralight text-[#0ea5e9]">
          Real Time Emotion Analysis
          </h2>
          <p className="text-gray-500 text-lg">
          See how clients feel during sales calls, like if they&apos;re surprised or bored, to help you respond better.      </p>
          
        </div>
        <Card className="overflow-hidden relative">
          <CardContent className="p-0">
            <div className="w-full bg-gray-300 aspect-[4/3] opacity-75" />
          </CardContent>
        </Card>
       
      </div>

      {/* Step 2 */}
      <div className="grid gap-16 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <Card className="overflow-hidden relative bg-gray-900">
            <CardContent className="p-0">
              <div className="w-full bg-gray-300 aspect-[4/3]" />
            </CardContent>
          </Card>
        </div>
        <div className="space-y-4 order-1 md:order-2">
          <h2 
          style={{ fontFamily: "var(--font-pp-editorial-new)" }}
          className="text-3xl sm:text-4xl font-ultralight text-[#0ea5e9]">
          Slack Integration
          </h2>
          <p className="text-gray-500 text-lg">
          Get instant updates on important client reactions through Slack, fitting into your daily work.
          </p>
          
        </div>
      </div>

      {/* Step 3 */}
      <div className="grid gap-16 md:grid-cols-2">
        <div className="space-y-4">
          <h2 
          style={{ fontFamily: "var(--font-pp-editorial-new)" }}
          className="text-3xl sm:text-4xl font-ultralight text-[#0ea5e9]">
          CRM Integration
          </h2>
          <p className="text-gray-500 text-lg">
          Automatically save call notes and track client details in Attio to keep all client info in one place.
          </p>
         
        </div>
        <Card className="overflow-hidden relative">
          <CardContent className="p-0">
            <div className="w-full bg-gray-300 aspect-[4/3] opacity-75" />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}