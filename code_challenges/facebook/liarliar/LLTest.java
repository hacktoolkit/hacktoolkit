import java.util.Random;
import java.util.SortedSet;
import java.util.TreeSet;

class LLTest {
    static void usage() {
        System.err.println("usage: java LLTest n seed");
        System.exit(1);
    }

    public static void main(String[] args) {
        if(args.length != 2) {
            usage();
        }
        try {
            int n;
            long seed;
            n = Integer.parseInt(args[0]);
            if(n < 2) {
                usage();
            }
            seed = Long.parseLong(args[1]);
            Random r = new Random(seed);
            int[] label = new int[n - 2];
            int[] d = new int[n];
            for(int i = 0; i < n - 2; ++i) {
                ++d[(label[i] = r.nextInt(n))];
            }
            SortedSet<Integer> s = new TreeSet<Integer>();
            for(int i = 0; i < n; ++i) {
                if(d[i] == 0) {
                    s.add(i);
                }
            }
            System.out.printf("%d\n", n);
            for(int i = 0; i < n - 2; ++i) {
                int j = s.first();
                s.remove(j);
                System.out.printf("%d\t%d\n", j, 1);
                System.out.printf("%d\n", label[i]);
                if(--d[label[i]] == 0) {
                    s.add(label[i]);
                }
            }
            System.out.printf("%d\t%d\n", s.first(), 1);
            System.out.printf("%d\n", s.last());
            System.out.printf("%d\t%d\n", s.last(), 0);
        } catch(NumberFormatException e) {
            usage();
        }
    }
}
