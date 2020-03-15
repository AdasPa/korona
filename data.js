const data = [
[Date.parse('2019-01-02'),1.25,1.29,1.16,1.22],
[Date.parse('2019-01-03'),1.23,1.25,1.15,1.18],
[Date.parse('2019-01-04'),1.17,1.22,1.1,1.14],
[Date.parse('2019-01-07'),1.14,1.16,1.14,1.16],
[Date.parse('2019-01-08'),1.15,1.26,1.15,1.17],
[Date.parse('2019-01-09'),1.2,1.2,1.12,1.18],
[Date.parse('2019-01-10'),1.16,1.19,1.13,1.17],
[Date.parse('2019-01-11'),1.18,1.21,1.13,1.19],
[Date.parse('2019-01-14'),1.15,1.19,1.13,1.14],
[Date.parse('2019-01-15'),1.16,1.24,1.14,1.24],
[Date.parse('2019-01-16'),1.23,1.3,1.2,1.26],
[Date.parse('2019-01-17'),1.27,1.27,1.2,1.23],
[Date.parse('2019-01-18'),1.21,1.24,1.16,1.19],
[Date.parse('2019-01-21'),1.2,1.25,1.16,1.25],
[Date.parse('2019-01-22'),1.24,1.44,1.24,1.37],
[Date.parse('2019-01-23'),1.39,1.39,1.29,1.36],
[Date.parse('2019-01-24'),1.32,1.37,1.3,1.35],
[Date.parse('2019-01-25'),1.37,1.37,1.31,1.35],
[Date.parse('2019-01-28'),1.34,1.37,1.3,1.3],
[Date.parse('2019-01-29'),1.32,1.36,1.28,1.34],
[Date.parse('2019-01-30'),1.3,1.34,1.29,1.29],
[Date.parse('2019-01-31'),1.29,1.32,1.25,1.3],
[Date.parse('2019-02-01'),1.31,1.31,1.27,1.27],
[Date.parse('2019-02-04'),1.3,1.3,1.23,1.27],
[Date.parse('2019-02-05'),1.27,1.27,1.25,1.27],
[Date.parse('2019-02-06'),1.29,1.35,1.29,1.32],
[Date.parse('2019-02-07'),1.34,1.34,1.25,1.29],
[Date.parse('2019-02-08'),1.28,1.29,1.22,1.28],
[Date.parse('2019-02-11'),1.29,1.29,1.23,1.26],
[Date.parse('2019-02-12'),1.25,1.25,1.13,1.19],
[Date.parse('2019-02-13'),1.17,1.17,1.1,1.15],
[Date.parse('2019-02-14'),1.11,1.25,1.08,1.12],
[Date.parse('2019-02-15'),1.1,1.15,1.07,1.15],
[Date.parse('2019-02-18'),1.15,1.16,1.11,1.11],
[Date.parse('2019-02-19'),1.14,1.18,1.11,1.15],
[Date.parse('2019-02-20'),1.17,1.17,1.12,1.14],
[Date.parse('2019-02-21'),1.2,1.59,1.17,1.59],
[Date.parse('2019-02-22'),1.52,1.6,1.35,1.37],
[Date.parse('2019-02-25'),1.42,1.44,1.31,1.36],
[Date.parse('2019-02-26'),1.37,1.44,1.28,1.39],
[Date.parse('2019-02-27'),1.38,1.38,1.28,1.3],
[Date.parse('2019-02-28'),1.35,1.37,1.3,1.33],
[Date.parse('2019-03-01'),1.34,1.58,1.3,1.54],
[Date.parse('2019-03-04'),1.54,1.55,1.43,1.535],
[Date.parse('2019-03-05'),1.59,1.59,1.46,1.52],
[Date.parse('2019-03-06'),1.525,1.55,1.48,1.535],
[Date.parse('2019-03-07'),1.55,1.55,1.42,1.455],
[Date.parse('2019-03-08'),1.45,1.59,1.41,1.59],
[Date.parse('2019-03-11'),1.59,1.94,1.59,1.87],
[Date.parse('2019-03-12'),1.9,2.28,1.87,2.2],
[Date.parse('2019-03-13'),2.19,2.25,2.02,2.12],
[Date.parse('2019-03-14'),2.13,2.25,2.07,2.14],
[Date.parse('2019-03-15'),2.16,2.16,2.04,2.12],
[Date.parse('2019-03-18'),2.19,2.68,2.14,2.68],
[Date.parse('2019-03-19'),2.78,2.92,2.51,2.74],
[Date.parse('2019-03-20'),2.72,2.84,2.6,2.65],
[Date.parse('2019-03-21'),2.61,2.72,2.12,2.26],
[Date.parse('2019-03-22'),2.25,2.3,2.15,2.21],
[Date.parse('2019-03-25'),2.21,2.33,2.18,2.23],
[Date.parse('2019-03-26'),2.26,2.26,2.16,2.18],
[Date.parse('2019-03-27'),2.2,2.2,2.02,2.02],
[Date.parse('2019-03-28'),2.02,2.17,1.86,2.15],
[Date.parse('2019-03-29'),2.17,2.17,2.02,2.08],
[Date.parse('2019-04-01'),2.02,2.06,1.95,2],
[Date.parse('2019-04-02'),2,2,1.91,1.96],
[Date.parse('2019-04-03'),1.98,1.98,1.9,1.95],
[Date.parse('2019-04-04'),1.96,1.98,1.91,1.97],
[Date.parse('2019-04-05'),1.98,1.98,1.91,1.97],
[Date.parse('2019-04-08'),1.97,2.3,1.94,2.24],
[Date.parse('2019-04-09'),2.27,2.63,2.03,2.11],
[Date.parse('2019-04-10'),2.1,2.18,1.96,2.09],
[Date.parse('2019-04-11'),2.11,2.13,2,2.08],
[Date.parse('2019-04-12'),2.08,2.47,2,2.26],
[Date.parse('2019-04-15'),2.38,2.73,2.29,2.62],
[Date.parse('2019-04-16'),2.69,2.82,2.43,2.43],
[Date.parse('2019-04-17'),2.47,2.61,2.43,2.49],
[Date.parse('2019-04-18'),2.49,2.5,2.37,2.44],
[Date.parse('2019-04-23'),2.49,2.52,2.16,2.3],
[Date.parse('2019-04-24'),2.2,2.32,2.17,2.23],
[Date.parse('2019-04-25'),2.21,2.28,2.18,2.2],
[Date.parse('2019-04-26'),2.24,2.25,2.13,2.22],
[Date.parse('2019-04-29'),2.29,2.65,2.14,2.48],
[Date.parse('2019-04-30'),2.49,2.58,2.17,2.29],
[Date.parse('2019-05-02'),2.2,2.3,2.15,2.24],
[Date.parse('2019-05-06'),2.25,2.25,2.13,2.21],
[Date.parse('2019-05-07'),2.13,2.46,2.13,2.21],
[Date.parse('2019-05-08'),2.25,2.37,2.15,2.21],
[Date.parse('2019-05-09'),2.24,2.24,2.17,2.2],
[Date.parse('2019-05-10'),2.2,2.26,2.17,2.24],
[Date.parse('2019-05-13'),2.23,2.3,2.17,2.21],
[Date.parse('2019-05-14'),2.17,2.21,2.13,2.19],
[Date.parse('2019-05-15'),2.2,2.2,2.13,2.19],
[Date.parse('2019-05-16'),2.17,2.31,2.14,2.27],
[Date.parse('2019-05-17'),2.29,2.29,2.19,2.24],
[Date.parse('2019-05-20'),2.18,2.26,2.18,2.24],
[Date.parse('2019-05-21'),2.24,2.26,2.2,2.25],
[Date.parse('2019-05-22'),2.25,2.25,2.2,2.23],
[Date.parse('2019-05-23'),2.18,2.38,2.18,2.24],
[Date.parse('2019-05-24'),2.18,2.25,2.15,2.2],
[Date.parse('2019-05-27'),2.18,2.23,2.17,2.2],
[Date.parse('2019-05-28'),2.19,2.21,2.15,2.18],
[Date.parse('2019-05-29'),2.19,2.19,2.15,2.17],
[Date.parse('2019-05-30'),2.19,2.2,2.15,2.2],
[Date.parse('2019-05-31'),2.22,2.22,2.15,2.15],
[Date.parse('2019-06-03'),2.19,2.19,2.14,2.17],
[Date.parse('2019-06-04'),2.17,2.18,2.14,2.17],
[Date.parse('2019-06-05'),2.17,2.17,2.05,2.15],
[Date.parse('2019-06-06'),2.14,2.18,1.97,1.97],
[Date.parse('2019-06-07'),1.99,2,1.9,1.99],
[Date.parse('2019-06-10'),2,2,1.8,1.88],
[Date.parse('2019-06-11'),1.815,1.88,1.73,1.77],
[Date.parse('2019-06-12'),1.78,1.92,1.78,1.825],
[Date.parse('2019-06-13'),1.895,1.895,1.775,1.845],
[Date.parse('2019-06-14'),1.88,1.88,1.77,1.81],
[Date.parse('2019-06-17'),1.81,1.81,1.73,1.79],
[Date.parse('2019-06-18'),1.785,1.785,1.73,1.78],
[Date.parse('2019-06-19'),1.745,1.75,1.68,1.71],
[Date.parse('2019-06-21'),1.685,1.72,1.68,1.715],
[Date.parse('2019-06-24'),1.715,1.75,1.68,1.685],
[Date.parse('2019-06-25'),1.7,2.05,1.69,2.04],
[Date.parse('2019-06-26'),2.03,2.03,1.87,1.88],
[Date.parse('2019-06-27'),1.875,1.975,1.865,1.935],
[Date.parse('2019-06-28'),1.96,1.96,1.88,1.93],
[Date.parse('2019-07-01'),1.945,1.945,1.875,1.92],
[Date.parse('2019-07-02'),1.93,2.06,1.9,1.955],
[Date.parse('2019-07-03'),2.01,2.2,2,2.1],
[Date.parse('2019-07-04'),2.15,2.15,2.01,2.04],
[Date.parse('2019-07-05'),2.09,2.18,2.01,2.03],
[Date.parse('2019-07-08'),2.33,2.46,2.22,2.31],
[Date.parse('2019-07-09'),2.35,2.48,2.3,2.33],
[Date.parse('2019-07-10'),2.3,2.42,2.09,2.13],
[Date.parse('2019-07-11'),2.32,2.36,2.17,2.24],
[Date.parse('2019-07-12'),2.21,2.25,2.16,2.22],
[Date.parse('2019-07-15'),2.22,2.25,2.15,2.21],
[Date.parse('2019-07-16'),2.23,2.23,2.13,2.15],
[Date.parse('2019-07-17'),2.17,2.23,2.12,2.23],
[Date.parse('2019-07-18'),2.24,2.31,2.13,2.18],
[Date.parse('2019-07-19'),2.2,2.21,2.14,2.19],
[Date.parse('2019-07-22'),2.19,2.2,2.16,2.19],
[Date.parse('2019-07-23'),2.2,2.3,2.16,2.3],
[Date.parse('2019-07-24'),2.29,2.45,2.28,2.4],
[Date.parse('2019-07-25'),2.44,2.72,2.41,2.47],
[Date.parse('2019-07-26'),2.47,2.54,2.32,2.42],
[Date.parse('2019-07-29'),2.45,2.51,2.34,2.47],
[Date.parse('2019-07-30'),2.51,2.54,2.39,2.43],
[Date.parse('2019-07-31'),2.39,2.46,2.3,2.36],
[Date.parse('2019-08-01'),2.37,2.37,2.28,2.33],
[Date.parse('2019-08-02'),2.33,2.37,2.26,2.3],
[Date.parse('2019-08-05'),2.26,2.42,2.26,2.36],
[Date.parse('2019-08-06'),2.36,2.42,2.26,2.3],
[Date.parse('2019-08-07'),2.33,2.33,2.19,2.23],
[Date.parse('2019-08-08'),2.19,2.22,2.17,2.19],
[Date.parse('2019-08-09'),2.2,2.23,2.15,2.16],
[Date.parse('2019-08-12'),2.2,2.22,2.15,2.22],
[Date.parse('2019-08-13'),2.21,2.21,2.13,2.19],
[Date.parse('2019-08-14'),2.2,2.2,2.15,2.19],
[Date.parse('2019-08-16'),2.19,2.19,2.05,2.12],
[Date.parse('2019-08-19'),2.11,2.11,2.02,2.06],
[Date.parse('2019-08-20'),2.06,2.06,2,2.04],
[Date.parse('2019-08-21'),2.04,2.08,2.02,2.05],
[Date.parse('2019-08-22'),2.05,2.05,1.94,1.995],
[Date.parse('2019-08-23'),2.01,2.01,1.935,1.935],
[Date.parse('2019-08-26'),2,2,1.85,1.97],
[Date.parse('2019-08-27'),1.915,1.97,1.915,1.97],
[Date.parse('2019-08-28'),1.97,1.97,1.905,1.97],
[Date.parse('2019-08-29'),2.02,2.03,2,2.03],
[Date.parse('2019-08-30'),2.03,2.03,2,2.03],
[Date.parse('2019-09-02'),2.03,2.03,1.9,1.995],
[Date.parse('2019-09-03'),1.96,2.01,1.9,1.965],
[Date.parse('2019-09-04'),1.87,2.25,1.87,2.1],
[Date.parse('2019-09-05'),2.15,2.15,2,2],
[Date.parse('2019-09-06'),2.04,2.21,2.04,2.17],
[Date.parse('2019-09-09'),2.16,2.22,2.1,2.1],
[Date.parse('2019-09-10'),2.19,2.19,2.09,2.15],
[Date.parse('2019-09-11'),2.18,2.18,2,2.07],
[Date.parse('2019-09-12'),2.01,2.12,2.01,2.04],
[Date.parse('2019-09-13'),2.06,2.06,1.98,2.02],
[Date.parse('2019-09-16'),2.04,2.04,1.95,2],
[Date.parse('2019-09-17'),2.02,2.03,1.9,1.985],
[Date.parse('2019-09-18'),1.92,1.985,1.92,1.965],
[Date.parse('2019-09-19'),1.985,1.985,1.89,1.97],
[Date.parse('2019-09-20'),1.98,1.995,1.9,1.985],
[Date.parse('2019-09-23'),1.95,1.985,1.91,1.975],
[Date.parse('2019-09-24'),1.97,1.975,1.925,1.975],
[Date.parse('2019-09-25'),1.985,1.985,1.93,1.98],
[Date.parse('2019-09-26'),1.98,2.03,1.935,1.985],
[Date.parse('2019-09-27'),2.02,2.02,1.97,2.02],
[Date.parse('2019-09-30'),2.03,2.07,1.98,2.07],
[Date.parse('2019-10-01'),2.1,2.2,2.02,2.09],
[Date.parse('2019-10-02'),2.09,2.14,1.96,2],
[Date.parse('2019-10-03'),2.03,2.03,1.91,1.99],
[Date.parse('2019-10-04'),1.985,2.07,1.9,1.97],
[Date.parse('2019-10-07'),1.985,1.985,1.95,1.95],
[Date.parse('2019-10-08'),1.985,2.05,1.915,1.93],
[Date.parse('2019-10-09'),2.04,2.04,1.945,2.01],
[Date.parse('2019-10-10'),2.04,2.11,1.945,2.06],
[Date.parse('2019-10-11'),2,2.04,1.96,2.03],
[Date.parse('2019-10-14'),2,2.03,1.965,2],
[Date.parse('2019-10-15'),2.03,2.03,1.95,2],
[Date.parse('2019-10-16'),2.03,2.03,1.94,2.02],
[Date.parse('2019-10-17'),1.97,2.04,1.93,1.98],
[Date.parse('2019-10-18'),1.98,2,1.95,1.99],
[Date.parse('2019-10-21'),2.01,2.01,1.91,1.94],
[Date.parse('2019-10-22'),1.94,1.99,1.9,1.965],
[Date.parse('2019-10-23'),1.96,1.98,1.91,1.98],
[Date.parse('2019-10-24'),1.99,1.99,1.9,1.97],
[Date.parse('2019-10-25'),1.9,1.97,1.9,1.955],
[Date.parse('2019-10-28'),1.965,1.965,1.85,1.895],
[Date.parse('2019-10-29'),1.92,1.93,1.825,1.92],
[Date.parse('2019-10-30'),1.91,1.925,1.85,1.925],
[Date.parse('2019-10-31'),1.925,1.925,1.825,1.895],
[Date.parse('2019-11-04'),1.83,1.89,1.71,1.785],
[Date.parse('2019-11-05'),1.805,1.805,1.68,1.755],
[Date.parse('2019-11-06'),1.75,1.795,1.7,1.795],
[Date.parse('2019-11-07'),1.79,1.79,1.74,1.785],
[Date.parse('2019-11-08'),1.785,1.85,1.76,1.8],
[Date.parse('2019-11-12'),1.845,1.85,1.78,1.85],
[Date.parse('2019-11-13'),1.85,1.85,1.77,1.82],
[Date.parse('2019-11-14'),1.82,1.82,1.715,1.77],
[Date.parse('2019-11-15'),1.76,1.775,1.705,1.775],
[Date.parse('2019-11-18'),1.705,1.79,1.705,1.76],
[Date.parse('2019-11-19'),1.755,1.755,1.7,1.705],
[Date.parse('2019-11-20'),1.72,1.755,1.68,1.705],
[Date.parse('2019-11-21'),1.74,1.78,1.65,1.775],
[Date.parse('2019-11-22'),1.79,1.79,1.705,1.77],
[Date.parse('2019-11-25'),1.77,1.77,1.71,1.77],
[Date.parse('2019-11-26'),1.765,1.78,1.715,1.78],
[Date.parse('2019-11-27'),1.77,1.795,1.72,1.77],
[Date.parse('2019-11-28'),1.79,2.1,1.79,2],
[Date.parse('2019-11-29'),2.12,2.28,2.1,2.11],
[Date.parse('2019-12-02'),2.26,2.65,2.15,2.44],
[Date.parse('2019-12-03'),2.44,2.57,2.25,2.26],
[Date.parse('2019-12-04'),2.26,2.48,2.19,2.43],
[Date.parse('2019-12-05'),2.48,2.48,2.31,2.36],
[Date.parse('2019-12-06'),2.33,2.41,2.2,2.23],
[Date.parse('2019-12-09'),2.31,2.31,2.15,2.17],
[Date.parse('2019-12-10'),2.23,2.23,2.11,2.13],
[Date.parse('2019-12-11'),2.19,2.19,2.1,2.13],
[Date.parse('2019-12-12'),2.17,2.18,2.1,2.17],
[Date.parse('2019-12-13'),2.18,2.24,2.08,2.19],
[Date.parse('2019-12-16'),2.2,2.28,2.15,2.18],
[Date.parse('2019-12-17'),2.26,2.26,2.15,2.19],
[Date.parse('2019-12-18'),2.19,2.19,2.11,2.11],
[Date.parse('2019-12-19'),2.11,2.23,2.11,2.2],
[Date.parse('2019-12-20'),2.15,2.2,2.12,2.14],
[Date.parse('2019-12-23'),2.13,2.17,2.11,2.17],
[Date.parse('2019-12-27'),2.17,2.17,2.08,2.13],
[Date.parse('2019-12-30'),2.11,2.12,2.02,2.05],
[Date.parse('2020-01-02'),2.08,2.08,1.99,2.07],
[Date.parse('2020-01-03'),2.1,2.1,2.01,2.09],
[Date.parse('2020-01-07'),2.12,2.16,2.09,2.14],
[Date.parse('2020-01-08'),2.14,2.14,2.06,2.11],
[Date.parse('2020-01-09'),2.11,2.11,2.07,2.08],
[Date.parse('2020-01-10'),2.08,2.16,2.03,2.07],
[Date.parse('2020-01-13'),2.11,2.22,2.04,2.17],
[Date.parse('2020-01-14'),2.21,2.21,2.07,2.07],
[Date.parse('2020-01-15'),2.1,2.13,1.95,2.01],
[Date.parse('2020-01-16'),2.05,2.05,1.94,2],
[Date.parse('2020-01-17'),2,2,1.94,2],
[Date.parse('2020-01-20'),1.91,2.13,1.91,2],
[Date.parse('2020-01-21'),2,2.05,1.95,2.01],
[Date.parse('2020-01-22'),2.01,2.03,1.96,2],
[Date.parse('2020-01-23'),2,2,1.92,1.96],
[Date.parse('2020-01-24'),1.985,1.985,1.95,1.975],
[Date.parse('2020-01-27'),1.975,2.04,1.94,1.985],
[Date.parse('2020-01-28'),1.99,1.99,1.945,1.97],
[Date.parse('2020-01-29'),1.92,1.985,1.91,1.965],
[Date.parse('2020-01-30'),1.98,1.98,1.9,1.935],
[Date.parse('2020-01-31'),1.94,1.94,1.865,1.935],
[Date.parse('2020-02-03'),1.935,1.935,1.85,1.9],
[Date.parse('2020-02-04'),1.93,1.93,1.81,1.86],
[Date.parse('2020-02-05'),1.86,1.93,1.86,1.89],
[Date.parse('2020-02-06'),1.89,1.915,1.825,1.9],
[Date.parse('2020-02-07'),1.9,1.91,1.855,1.88],
[Date.parse('2020-02-10'),1.88,1.93,1.88,1.92],
[Date.parse('2020-02-11'),1.81,1.92,1.81,1.87],
[Date.parse('2020-02-12'),1.87,1.93,1.87,1.885],
[Date.parse('2020-02-13'),1.9,2.07,1.9,1.975],
[Date.parse('2020-02-14'),1.98,1.98,1.85,1.88],
[Date.parse('2020-02-17'),1.9,1.915,1.85,1.86],
[Date.parse('2020-02-18'),1.9,1.9,1.84,1.85],
[Date.parse('2020-02-19'),1.86,1.95,1.84,1.89],
[Date.parse('2020-02-20'),1.85,2.05,1.85,1.88],
[Date.parse('2020-02-21'),1.88,1.905,1.81,1.89],
[Date.parse('2020-02-24'),1.905,1.905,1.8,1.84],
[Date.parse('2020-02-25'),1.815,1.855,1.8,1.835],
[Date.parse('2020-02-26'),1.8,1.86,1.72,1.765],
[Date.parse('2020-02-27'),1.77,1.77,1.595,1.62],
[Date.parse('2020-02-28'),1.59,1.59,1.44,1.51],
[Date.parse('2020-03-02'),1.51,1.6,1.51,1.56],
[Date.parse('2020-03-03'),1.55,1.695,1.54,1.62],
[Date.parse('2020-03-04'),1.68,1.68,1.525,1.64],
[Date.parse('2020-03-05'),1.635,1.68,1.6,1.64],
[Date.parse('2020-03-06'),1.655,1.66,1.55,1.645],
[Date.parse('2020-03-09'),1.51,1.59,1.31,1.395],
[Date.parse('2020-03-10'),1.35,1.435,1.31,1.34],
[Date.parse('2020-03-11'),1.3,1.315,1.235,1.25],
[Date.parse('2020-03-12'),1.215,1.215,0.976,1.03],
[Date.parse('2020-03-13'),0.86,1.08,0.85,1.05,69722]
]