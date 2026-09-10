export function ShowContent({ showContent = false, children }) {
  return showContent ? children : null;
}
