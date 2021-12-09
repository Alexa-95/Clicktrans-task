Create page with form that has next fields:
1. Textarea input with label “Description”. It has to be required and length of field
should be no more than 255 characters. While entering text, the user should
be able to see how many characters he is still able to add. Validation
messages (“Text is required”, “You can’t enter more than 255 characters”)
should appear dynamically while the user is entering the text or when the user
submits form and current data is incorrect.
2. Radio button YES/NO with label “Send confirmation”. It has to be required and
not checked by default. Validation message (“Text is required”) should appear
when the user submits a form and current data is incorrect.
3. Select input with label “VAT”, placeholder “Choose VAT” and values:
- 19%
- 21%
- 23%
- 25%
It has to be required. Validation message (“Text is required”) should appear
when the user submits a form and current data is incorrect.
4. Text input with label “Price netto EUR”. It has to be required. It also has to be
disabled before the user will choose some value from the VAT selector. When
the user chooses some vat value from the selector text input should be
enabled and the user should be able to add some float number. Input should
accept only numbers but both with “,” and “.” symbols like 12,56 or 12.56.
Validation message (“Please, input number”) should appear dynamically while
the user is entering not number values or when the user submits form and
current data is incorrect.
5. Text input with label “Price brutto EUR”. Should be always disabled. The value
of that field should be dynamically calculated using value from “Price netto
EUR” text input and value from vat selector. While the user enters different
values in the “Price netto EUR” field or changes VAT value using the selectorhe should see that price brutto is changing in the correct way and in the same
moment without reloading the page.
6. Submit button. While clicking on submit button, in case form is valid, form
should be sent via AJAX to some REST API resource that will return success
status. You should not realize any backend REST API logic. You may use any
backend language or any external API or mock technologies that will simply
return success status. You should process the “Success” response in the
following way: Whole form should be hidden. Green box should appear with a
congratulation message instead of a form. You should also predict processing
of error responses from API.
