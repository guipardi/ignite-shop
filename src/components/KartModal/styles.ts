import { styled } from "@/src/styles";
import * as Dialog from "@radix-ui/react-dialog";

export const Content = styled(Dialog.Content, {
  display: 'flex',
  width: '480px',
  height: '900px',

  position: 'absolute',
  right: '0',
  top: '0',
  bottom: '0',
})
