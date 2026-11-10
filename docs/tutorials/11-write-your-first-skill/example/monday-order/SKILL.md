---
name: monday-order
description: Works out Maria's Bakery's weekly flour and butter order from the stock sheet and price list, then drafts the supplier email for Maria to send herself. Use when Maria says "Monday order", "flour order", "butter order", or asks what to order from Millbrook Supplies.
---

# Monday order

## 1. Get the two inputs
Ask for this week's `stock-and-usage.csv` and `prices.csv` if they are not attached.
Why: the order is only as good as this week's count.
If one is missing, stop and say which one. Do not use last week's numbers.

## 2. Work out each order
Use code for every calculation.
- Weekly use = average of the last 4 weeks, rounded up to a whole unit.
- Order = weekly use + 1 spare - in stock. Never below 0.
Why: one week's use plus one spare covers a busy weekend without waste.

## 3. Check the stop rules
Stop and ask Maria before going on if:
- an item has no price,
- an order is more than double `last_order`,
- the total is over £500.
Why: these are the cases where a mistake costs real money.

## 4. Show the table and wait
Show: item, in stock, weekly use, order, unit price, line cost, total.
Ask: "Here are 4 lines, total £{total}. Draft the email to Millbrook Supplies?"
Wait for a yes.

## 5. Draft the email
To: orders@example.com. Subject: "Monday order". Short and polite.
List each item and quantity. Ask for delivery on Wednesday before 9:00. Sign "Maria".
Mark it DRAFT at the top.

## 6. Hand over
Give the table, the draft, and one line on anything you were unsure about.
Never send, order, pay or delete anything. Maria sends the email herself.
Never invent a number. If a value is missing, say so.
