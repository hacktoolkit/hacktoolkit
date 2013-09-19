import java.util.*;
public class Test {
    public static void main(String[] args) {
        if(args.length != 2) {
            System.err.println("Usage: java Test <n> <seed>");
            System.exit(1);
        }
        int n = Integer.parseInt(args[0]);
        Random r = new Random(Integer.parseInt(args[1]));
        int a = r.nextInt(n);
        boolean[][] used = new boolean[n][n];
        int[] move = new int[((n + 1) * n) / 2 + 1];
        move[0] = a;
        int m = 0;
        while(true) {
            int b = r.nextInt(n);
            if(used[a][b]) break;
            used[a][b] = used[b][a] = true;
            move[++m] = a = b;
        }
        System.out.println(n);
        System.out.println(m);
        for(int j = 0; j < m; ++j) System.out.println(move[j] + " " + move[j + 1]);
    }
}
