import React from 'react';

interface FormattedProductNameProps {
  name: string;
  className?: string;
  suffixClassName?: string;
}

export const FormattedProductName: React.FC<FormattedProductNameProps> = ({
  name,
  className = '',
  suffixClassName = 'font-normal font-sans opacity-85 text-[0.92em]',
}) => {
  const match = name.match(/^(.*?)(?:\s+(Tab\.?|Cap\.?|Syp\.?|Drop\.?|Susp\.?|Sachet|Protein\s+Powder))$/i);

  if (match) {
    return (
      <span className={className}>
        <span>{match[1]}</span>{' '}
        <span className={suffixClassName}>{match[2]}</span>
      </span>
    );
  }

  return <span className={className}>{name}</span>;
};
