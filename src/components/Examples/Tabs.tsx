type TabsProps = {
  children: any;
  buttons: any;
  ButtonsContainer?: any;
};

export default function Tabs({
  children,
  buttons,
  ButtonsContainer = "menu",
}: TabsProps) {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
