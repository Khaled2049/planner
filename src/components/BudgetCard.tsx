import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap';
import { currencyFormatter } from '../utils';

interface IBudgetCardProps {
  name: string;
  ammount: number;
  max: number;
}

function getProgressBarVarient(amount: number, max: number) {
  const ratio = amount / max;
  console.log(ratio);
  if (ratio < 0.5) return 'primary';
  if (ratio < 0.75) return 'warning';
  return 'danger';
}

const BudgetCard = ({ name, ammount, max }: IBudgetCardProps) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
          <div className="me-2">{name}</div>
          <div className="d-flex align-items-baseline">
            {currencyFormatter.format(ammount)} /{' '}
            <span className="text-muted fs-6 ms-1">
              {currencyFormatter.format(max)}
            </span>
          </div>
        </Card.Title>
        <ProgressBar
          className="rounded-pill"
          variant={getProgressBarVarient(ammount, max)}
          min={0}
          max={max}
          now={ammount}
        ></ProgressBar>
      </Card.Body>
    </Card>
  );
};

export default BudgetCard;
