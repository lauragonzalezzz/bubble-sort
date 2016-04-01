SORTING ALGORITHMS

1. Bubble Sort

  i. ELI5 Explanation:

    You can use a bubble sorting algorithm to find out who is tallest in your class!
    First, have everyone line up together in a straight line.
    Next, pick a volunteer--they will be the one who everyone is compared to.
    The volunteer will walk down the line of your classmates where each person will either go into a separate 'taller' line on the right or a separate 'shorter' line on the left, depending if they are taller or shorter than the volunteer. The volunteer will stay in the middle between the 'taller' and 'shorter' lines but will not be part of the line again until the end.
    Now, repeat the process so each line has it's own volunteer and compare the rest of your classmates in that line.
    Keep separating the lines and picking volunteers until each line only has one person.
    Next, everybody goes back into one big line, starting from the left line, then the volunteer, then the right line until everyone is back in line!

  ii. Psuedo code:

    myRandomArray = [4,5,2,1,3]

    declare a bubble sort function
      declare a boolean variable to gauge if the array is sorted, set to false
      set a while loop to continue until the array is sorted
        declare a variable to track the individual swaps performed, set to 0
        iterate over the length of the array
        declare a variable named 'current', set to # of iterations
        declare a variable named 'next', set to # iterations + 1
        if current is greater than next, swap current and next
          increase number of swaps
        if no swaps were performed, change boolean variable to true, which breaks the while loop
    return the sorted array

  iii. In My Own Words: Describe Best Case, Worst Case

    Best Case Scenario: a sorted array
      The Bubble Sort algorithm will make 2 passes, the first to see if any swaps need to be made, the second to be sure no swaps have been made.

    Worst Case Scenario: an array with values that are each less than the next, a backwards sorted array
      The Bubble Sort algorithm will have to make a swap for each number then, an additional pass to ensure no swaps have been made.


2. Quick Sort

  i. ELI5 Explanation:

  ii. Psuedo Code:

  iii. In My Own Words: Describe Best Case, Worst Case