import { Layout } from "..";
import { Text } from "../../../atoms/text";

export const FullWidthLayout = new Layout({
  name: "fullWidth",
  styles: {
    containerClassName: "fullWidthContainer",
    title: { variant: Text.Variant.Heading },
  },
});
