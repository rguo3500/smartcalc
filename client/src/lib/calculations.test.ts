import {describe,expect,it} from 'vitest';
import {percentage,percentageChange,fraction,average,ratio,age,dateDifference,timeDuration,workingDays,bmi,bmr,calorie,monthlyPayment,compound,simpleInterest,markup,breakEven,unitConversion,fuelCost,salesTax,savingsGoal,pace,dateAdd} from './calculations';

describe('SmartCalc calculator engines',()=>{
  it('percentage handles normal, zero, decimal and invalid values',()=>{expect(percentage(20,500)).toBe(100);expect(percentage(0,500)).toBe(0);expect(percentage(12.5,80)).toBe(10);expect(Number.isNaN(percentage(20,NaN))).toBe(true)});
  it('percentage change handles increases, decreases and zero denominator',()=>{expect(percentageChange(100,125)).toBe(25);expect(percentageChange(100,75)).toBe(-25);expect(Number.isNaN(percentageChange(0,10))).toBe(true)});
  it('fraction reduces results and rejects zero denominators',()=>{expect(fraction(1,2,1,4,'+')).toEqual({numerator:3,denominator:4});expect(fraction(2,3,3,4,'*')).toEqual({numerator:1,denominator:2});expect(fraction(1,0,1,2,'+')).toBeNull()});
  it('average ignores invalid tokens and rejects empty input',()=>{expect(average('10, 20, 30')).toBe(20);expect(average('10, nope, 20')).toBe(15);expect(Number.isNaN(average(''))).toBe(true)});
  it('ratio solves proportional values and rejects zero base',()=>{expect(ratio(2,3,20)).toBe(30);expect(Number.isNaN(ratio(0,3,20))).toBe(true)});
  it('loan and mortgage payment formula handles zero rate and normal APR',()=>{expect(monthlyPayment(100000,0,10)).toBeCloseTo(833.333333,6);expect(monthlyPayment(100000,6,30)).toBeCloseTo(599.55,2);expect(Number.isNaN(monthlyPayment(100000,6,0))).toBe(true)});
  it('compound interest handles zero and positive rates',()=>{expect(compound(1000,0,2,100)).toBe(3400);expect(compound(1000,5,2,100)).toBeGreaterThan(3400);expect(Number.isNaN(compound(-1,5,2,100))).toBe(true)});
  it('simple interest handles decimals',()=>{expect(simpleInterest(1000,5,3)).toBe(150);expect(simpleInterest(1000,2.5,1.5)).toBe(37.5)});
  it('age handles leap year and reversed dates',()=>{expect(age('2000-02-29','2024-02-28')).toEqual({years:23,months:11,days:30});expect(age('2020-01-01','2019-01-01')).toBeNull();expect(age('bad','2024-01-01')).toBeNull()});
  it('date difference returns signed calendar days',()=>{expect(dateDifference('2026-08-10','2026-08-16')).toBe(6);expect(dateDifference('2026-08-16','2026-08-10')).toBe(-6);expect(Number.isNaN(dateDifference('bad','2026-08-10'))).toBe(true)});
  it('time duration handles same day and midnight crossing',()=>{expect(timeDuration('09:15','10:45')).toBe(90);expect(timeDuration('23:30','00:15')).toBe(45);expect(Number.isNaN(timeDuration('bad','00:15'))).toBe(true)});
  it('working days excludes weekends and rejects reversed ranges',()=>{expect(workingDays('2026-08-10','2026-08-16')).toBe(5);expect(workingDays('2026-08-15','2026-08-16')).toBe(0);expect(Number.isNaN(workingDays('2026-08-16','2026-08-10'))).toBe(true)});
  it('BMI uses metric height and weight',()=>{expect(bmi(70,175)).toBeCloseTo(22.857,2);expect(Number.isNaN(bmi(70,0))).toBe(true);expect(Number.isNaN(bmi(-1,175))).toBe(false)});
  it('BMR supports both sex inputs',()=>{expect(bmr(70,175,30,'male')).toBeCloseTo(1648.75,2);expect(bmr(70,175,30,'female')).toBeCloseTo(1482.75,2);expect(Number.isNaN(bmr(70,175,NaN,'male'))).toBe(true)});
  it('calorie estimate multiplies BMR by activity',()=>{expect(calorie(1600,1.375)).toBe(2200);expect(Number.isNaN(calorie(NaN,1.2))).toBe(true)});
  it('all financial engines reject NaN rather than returning Infinity',()=>{expect(Number.isNaN(monthlyPayment(NaN,5,10))).toBe(true);expect(Number.isNaN(compound(NaN,5,10,0))).toBe(true);expect(Number.isNaN(simpleInterest(NaN,5,10))).toBe(true)});
  it('markup returns a selling price and rejects negative cost',()=>{expect(markup(25,40)).toBe(35);expect(Number.isNaN(markup(-1,40))).toBe(true)});
  it('break-even solves units and rejects non-positive contribution margin',()=>{expect(breakEven(10000,50,20)).toBeCloseTo(333.333,2);expect(Number.isNaN(breakEven(10000,20,20))).toBe(true)});
  it('unit conversion handles metric, imperial and temperature units',()=>{expect(unitConversion(1,'km','mi')).toBeCloseTo(.621371,5);expect(unitConversion(1,'lb','kg')).toBeCloseTo(.453592,5);expect(unitConversion(32,'f','c')).toBeCloseTo(0,5);expect(Number.isNaN(unitConversion(1,'bad','km'))).toBe(true)});
  it('fuel cost handles zero distance and rejects zero efficiency',()=>{expect(fuelCost(300,25,3.5)).toBe(42);expect(fuelCost(0,25,3.5)).toBe(0);expect(Number.isNaN(fuelCost(300,0,3.5))).toBe(true)});
  it('sales tax adds a non-negative rate and rejects invalid prices',()=>{expect(salesTax(100,8.25)).toBeCloseTo(108.25,2);expect(salesTax(0,8)).toBe(0);expect(Number.isNaN(salesTax(-1,8))).toBe(true)});
  it('savings goal handles zero interest and positive growth',()=>{expect(savingsGoal(1200,0,0,12)).toBe(100);expect(savingsGoal(1200,0,12,12)).toBeLessThan(100);expect(Number.isNaN(savingsGoal(1200,0,4,0))).toBe(true)});
  it('running pace divides time by positive distance',()=>{expect(pace(5,30)).toBe(6);expect(pace(10,0)).toBe(0);expect(Number.isNaN(pace(0,30))).toBe(true)});
  it('date add handles positive, negative and invalid dates',()=>{expect(dateAdd('2026-08-13',30)).toBe('2026-09-12');expect(dateAdd('2026-08-13',-13)).toBe('2026-07-31');expect(dateAdd('bad',3)).toBe('')});
});
