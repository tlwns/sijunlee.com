import { Field as ChakraField } from "@chakra-ui/react"
import * as React from "react"

export interface FieldProps extends Omit<ChakraField.RootProps, "label"> {
  label?: React.ReactNode
  helperText?: React.ReactNode
  errorText?: React.ReactNode
  optionalText?: React.ReactNode
}

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  function Field(props, ref) {
    const { label, children, helperText, errorText, optionalText, ...rest } =
      props
    return (
      <ChakraField.Root ref={ref} {...rest}>
      ***REMOVED***label && (
          <ChakraField.Label>
          ***REMOVED***label}
            <ChakraField.RequiredIndicator fallback={optionalText} />
          </ChakraField.Label>
        )}
      ***REMOVED***children}
      ***REMOVED***helperText && (
          <ChakraField.HelperText>{helperText}</ChakraField.HelperText>
        )}
      ***REMOVED***errorText && (
          <ChakraField.ErrorText>{errorText}</ChakraField.ErrorText>
        )}
      </ChakraField.Root>
    )
***REMOVED***
)
