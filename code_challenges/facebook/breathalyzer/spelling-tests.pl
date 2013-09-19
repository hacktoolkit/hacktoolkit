#!/usr/bin/perl
use warnings;
# cmdline args are, in order:
$input=shift || "/var/tmp/twl06.txt"; #just a source for garbled input words, not necessarily the actual dict
$maxdist=shift || 0; # applies this many edits, but edit dist will be <= this bound (may accidentally edit back closer to another dict word)
$prob_dict_to_input=shift || .001; # portion of dict that is kept on average
$seed=shift || 187;
$pre=shift || ""; # prepend to every output word
$suf=shift || ""; # append to every
$also_orig=shift || 0; # if true => also generate original word^N times no spaces
$first_char=shift || "a"; # try setting to "`", which is 1 less than a if you want to check non-alphabetic inputs.  anything outside range gets set to $first_char

$last_char="z";

srand($seed);
$first_ord=ord $first_char;
$n_ord=ord($last_char) - $first_ord + 1;
$last_ord=$first_ord+$n_ord-1;

sub clamp_ord {
    my ($o)=@_;
    ($o<$first_ord || $o >$last_ord) ? $first_ord : $o
    }
sub clamp_str {
    my ($s)=@_;
#    pack("C*",map { clamp_ord($_) } unpack("C*",$s));
    $s
    }
sub maybe {
    rand() <.2 ? 1 : 0
    }
sub rand_ws {
    &maybe ? " " : &maybe ? "\t" : &maybe ? "\n" : &maybe ? "\r" : &rand_ws
    }
sub keep {
    rand() < $prob_dict_to_input
    }
sub rand_i {
    int(rand $_[0]);
}
sub rand_ord {
    &rand_i($n_ord) + $first_ord
    }
sub rand_alph {
    chr(&rand_ord)
    }
sub rand_edit { # note: may produce an empty word, which will disappear in parsing
    my ($s)=@_;
    my ($i)=&rand_i(length $s);
    substr($s,$i,&maybe)=&maybe?"":&rand_alph;
    $s
    }
sub rand_editn {
    my ($s)=@_;
    $s=&rand_edit($s) for(1..$maxdist);
    $s
    }
open(DICT,'<',$input) || die "no $input";
$Nin=0;
@words=();
$prelen=0;
while(<DICT>) {
    while(/(\S+)/g) {
        $word=clamp_str(lc($1));
        ++$Nin;
        if (&keep) { # choose first: consistent subset of words given seed
            push @words,$word;
        }
    }
}
@words=("empty") unless scalar @words;
$N=scalar @words;
$postlen=0;
for my $word (@words) {
    $prelen+=length $word;
    $wr=&rand_editn($word);
    $postlen+=length $wr;
    print $pre,$wr,$suf,&rand_ws;
    $wx=$word x $also_orig;
    print $wx,&rand_ws if $also_orig;
}
$avgpre=$prelen/$N;
$avgpost=$postlen/$N;
print STDERR "\n$N of $Nin possible words selected, $maxdist edits applied to each (avg length $avgpre => $avgpost).  Max total possible edit dist=".$N*$maxdist."\n";
