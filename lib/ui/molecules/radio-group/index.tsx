import {
  ChangeEventHandler,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import { IPillRadio, Pill } from "../../atoms/pill";
import styles from "./styles.module.scss";

export interface Option {
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

export const RadioGroup = forwardRef((props: RadioGroupProps, ref) => {
  const { name, options, onChange, defaultValue, addOptionButton } = props;
  const [checked, setChecked] = useState(defaultValue);

  useImperativeHandle(ref, () => ({
    updateValue(value: string) {
      setChecked(value);
    },
  }));

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
});

RadioGroup.displayName = "RadioGroup";
