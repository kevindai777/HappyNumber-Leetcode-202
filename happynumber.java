//Java Solution

class Solution {
    public boolean isHappy(int n) {
        Set<Integer> visited = new HashSet<>();
        while (n != 1 && !visited.contains(n)) {
            visited.add(n);
            n = getNext(n);
        }
        
        return n == 1;
    }
    
    public int getNext(int n) {
        int total = 0;
        while (n > 0) {
            total += (n % 10) * (n % 10);
            n /= 10;
        }
        
        return total;
    }
}