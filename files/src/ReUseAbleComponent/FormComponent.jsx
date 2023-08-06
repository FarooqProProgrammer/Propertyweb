export const Label = ({ children, className, style, htmlFor }) => {
  return (
    <label className={className} style={style} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export const Input = ({
  className,
  validation,
  onChange,
  style,
  defaultValue,
  value,
  type,
  name,
  placeholder,
  multiple,
}) => {
  return (
    <input
      className={className}
      onChange={onChange}
      validation={validation}
      defaultValue={defaultValue}
      placeholder={placeholder}
      name={name}
      style={style}
      value={value}
      type={type}
      multiple={multiple}
    />
  );
};

export const DIV = ({ className, children, style, id, ref }) => {
  return (
    <div className={className} style={style} ref={ref} id={id}>
      {children}
    </div>
  );
};

export const TextArea = ({
  spellCheck,
  defaultValue,
  children,
  rows,
  cols,
  className,
  style,
  id,
}) => {
  return (
    <textarea
      rows={rows}
      spellCheck={spellCheck}
      defaultValue={defaultValue}
      cols={cols}
      style={style}
      id={id}
      className={className}
    >
      {children}
    </textarea>
  );
};
