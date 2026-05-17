type ReadType = "actual" | "estimated" | "final"


interface BillingLine {
    description: string
    quantity?: number
    rate: number
    amount: number
    vatApplicable: boolean
}

interface MunicipalBill {
    accountNumber: string
    municipality: string
    billingPeriod: string
    meterNumber?: string
    previousReading: number
    currentReading: number
    readtype: ReadType
    isEstimatedReading: boolean
    consumption: number
    amountDue: number
    billingLines: BillingLine[]
}

const bill: MunicipalBill = {
    accountNumber: "CHE001-SS53",
    municipality: "City of Cape Town",
    billingPeriod: "2026-02-26 to 2026-04-21",
    previousReading: 251060,
    currentReading: 251350,
    isEstimatedReading: false,
    consumption: 290,
    amountDue: 2755.88,
    readtype: "estimated",
    billingLines: [
        {
            description: "Water",
            rate: 4.2,
            quantity: 27.48,
            amount: 995.28,
            vatApplicable: false
        },
        {
            description: "Electricity",
            rate: 3.4,
            amount: 1045.76,
            vatApplicable: false 
        },
        {
            description: "Sewerage",
            amount: 714.83,
            rate: 3.5,
            vatApplicable: false 
        }
    ]
        
}

function checkEstimatedRead( bill: MunicipalBill): boolean {
    return bill.readtype === "estimated";
}

console.log(checkEstimatedRead(bill));