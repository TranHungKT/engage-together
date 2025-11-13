import { Typography } from 'antd';
import './FormLabel.style.scss';

interface FormLabelProps {
  label: string;
}

export default function FormLabel({ label }: FormLabelProps) {
  return <Typography className="form-label_text">{label}</Typography>;
}
