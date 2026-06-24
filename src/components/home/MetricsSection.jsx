import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import AnimatedCounter from './AnimatedCounter';

const metrics = [
{ value: 750, suffix: 'M+', prefix: '', label: 'Global Candidate Profiles', desc: 'The most comprehensive talent database on the planet' },
{ value: 180, suffix: '+', prefix: '', label: 'Countries Covered', desc: 'Autonomous hiring infrastructure across every major market' },
{ value: '24', suffix: '/7', prefix: '', label: 'Autonomous Operations', desc: 'Your hiring engine never sleeps, never takes a break', isText: true },
{ value: 100, suffix: 'x', prefix: '', label: 'Recruiter Productivity Potential', desc: 'Infrastructure that scales without increasing headcount' }];


export default function MetricsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return null;














































































}