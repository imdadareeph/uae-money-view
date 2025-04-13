interface ParsedTransaction {
  type: 'debit' | 'credit';
  amount: number;
  currency: string;
  description: string;
  merchantName?: string;
  cardLastFour?: string;
  balanceAfter?: number;
  transactionDate: Date;
}

export function parseENBDSms(message: string): ParsedTransaction | null {
  // Regular expressions for different ENBD SMS formats
  const purchaseRegex = /Purchase of (AED|USD) ([\d,.]+) with (?:Debit|Credit) Card ending (\d{4}) at (.*?)[,.].*?(?:Avl Balance|Avl Cr\. Limit) is (?:AED) ([\d,.]+)/;
  const refundRegex = /Purchase amount of AED ([\d,.]+) at (.*?) on your (?:Debit|Credit) Card ending (\d{4}).*?Avl Bal is AED ([\d,.]+)/;
  const withdrawalRegex = /Cash Withdrawal of AED ([\d,.]+) with (?:Debit|Credit) Card ending (\d{4}) at (.*?)\. Avl Bal is AED ([\d,.]+)/;
  const transferRegex = /AED ([\d,.]+) has been (credited|deducted) (?:to|from) your account.*?(?:The available balance is AED|Avl Bal is AED) ([\d,.]+)/;

  try {
    // Extract date from message (assuming format: [DD/MM/YYYY, HH:MM:SS AM/PM])
    const dateMatch = message.match(/\[(.*?)\]/);
    const transactionDate = dateMatch ? new Date(dateMatch[1]) : new Date();

    // Try to match different transaction types
    let match;
    
    // Purchase transaction
    if ((match = message.match(purchaseRegex))) {
      return {
        type: 'debit',
        currency: match[1],
        amount: parseFloat(match[2].replace(/,/g, '')),
        cardLastFour: match[3],
        merchantName: match[4].trim(),
        balanceAfter: parseFloat(match[5].replace(/,/g, '')),
        description: `Purchase at ${match[4].trim()}`,
        transactionDate,
      };
    }
    
    // Refund transaction
    if ((match = message.match(refundRegex))) {
      return {
        type: 'credit',
        currency: 'AED',
        amount: parseFloat(match[1].replace(/,/g, '')),
        merchantName: match[2].trim(),
        cardLastFour: match[3],
        balanceAfter: parseFloat(match[4].replace(/,/g, '')),
        description: `Refund from ${match[2].trim()}`,
        transactionDate,
      };
    }
    
    // Cash withdrawal
    if ((match = message.match(withdrawalRegex))) {
      return {
        type: 'debit',
        currency: 'AED',
        amount: parseFloat(match[1].replace(/,/g, '')),
        cardLastFour: match[2],
        merchantName: match[3].trim(),
        balanceAfter: parseFloat(match[4].replace(/,/g, '')),
        description: 'ATM Withdrawal',
        transactionDate,
      };
    }
    
    // Transfer
    if ((match = message.match(transferRegex))) {
      return {
        type: match[2] === 'credited' ? 'credit' : 'debit',
        currency: 'AED',
        amount: parseFloat(match[1].replace(/,/g, '')),
        balanceAfter: parseFloat(match[3].replace(/,/g, '')),
        description: match[2] === 'credited' ? 'Transfer Received' : 'Transfer Sent',
        transactionDate,
      };
    }

    return null;
  } catch (error) {
    console.error('Error parsing SMS:', error);
    return null;
  }
}