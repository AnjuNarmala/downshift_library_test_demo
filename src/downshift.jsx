import { useCombobox } from "downshift";

export default function DownshiftDemo() {
  const items = ["Apple", "Orange", "Grapes", "Banana", "Papaya"];

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getItemProps,
    highlightedIndex
  } = useCombobox({ items });

  return (
    <div className="downshift-container">
      <input
        {...getInputProps()}
        placeholder="Search fruits…"
        className="downshift-input"
      />

      <ul
        {...getMenuProps()}
        className="downshift-menu"
        style={{ display: isOpen ? "block" : "none" }}
      >
        {isOpen &&
          items.map((item, index) => (
            <li
              key={item}
              {...getItemProps({ item, index })}
              className={
                highlightedIndex === index
                  ? "downshift-item highlighted"
                  : "downshift-item"
              }
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
}
