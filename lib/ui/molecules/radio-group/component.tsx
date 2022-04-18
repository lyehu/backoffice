import { ChangeEventHandler, useState } from "react";
import { IPillRadio, Pill } from "../../atoms/pill/component";
import styles from "./styles.module.scss";

interface Option {
  id: string;
  label: string;
  value: string;
}

interface RadioGroupProps {
  name: string;
  options: Option[];
  onChange: (value: string) => void;
  defaultValue?: string;
  addOptionButton: {
    label: string;
    onClick: () => void;
  };
}

export const RadioGroup = (props: RadioGroupProps) => {
  const { name, options, onChange, defaultValue, addOptionButton } = props;
  const [checked, setChecked] = useState(defaultValue);

  const onValueChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const {
      target: { value },
    } = event;
    setChecked(value);
    onChange(value);
  };

  const pills: IPillRadio[] = options.map((option: Option) => {
    const isSelectedValue = checked === option.value;
    return {
      ...option,
      selected: isSelectedValue,
      onChange: onValueChange,
      name: name,
    };
  });

  const button = {
    ...addOptionButton,
    neutral: true,
  };

  return (
    <div>
      {pills.map((pill: IPillRadio) => (
        <Pill className={styles.pill} key={pill.id} {...pill} />
      ))}
      {addOptionButton && <Pill {...button} />}
    </div>
  );
};
