---
title: Weird Algorithm
problem: https://cses.fi/problemset/task/1068
tags: [simulation]
---

# Weird Algorithm

[CSES task 1068](https://cses.fi/problemset/task/1068)

## Problem

Given a positive integer `n`, repeatedly replace it with `n / 2` if even, or `3n + 1` if odd, until it becomes `1`. Print every value in the sequence (including the start and the final `1`).

Constraints: `1 ≤ n ≤ 10^6`

## Approach

Simulate the Collatz-style process directly. Use a 64-bit integer because intermediate values can exceed 32-bit range even though the input fits in `10^6`.

## Complexity

- **Time:** `O(k)` where `k` is the length of the sequence (small in practice for the given bounds)
- **Memory:** `O(1)`

## Solution

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);

  long long n;
  cin >> n;
  while (true) {
    cout << n << (n == 1 ? '\n' : ' ');
    if (n == 1) break;
    n = (n % 2 == 0) ? n / 2 : 3 * n + 1;
  }
}
```

## Notes

Watch overflow: `3n + 1` on a large odd `n` needs `long long`.
