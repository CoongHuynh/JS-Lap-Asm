# Lap 12

**Lab 12.1: Phân loại thú cưng**

Julia và Kate đang thực hiện một nghiên cứu trên chó. Mỗi người đã hỏi 5 chủ sở hữu chó về tuổi chú chó của họ và lưu trữ dữ liệu vào một array (mỗi người một array). Hiện tại, họ chỉ muốn biết một chú chó là chó trưởng thành hay chó con.

Một chú chó được coi là trưởng thành nếu nó ít nhất từ 3 tuổi trở lên, và là chó con nếu nó dưới 3 tuổi.

**1. Nhiệm vụ của bạn**

Tạo hàm 'checkDogs', nhận 2 array tuổi của chó ('dogJulia' và 'dogKate') và thực hiện những điều sau:

- Julia phát hiện ra rằng chủ nhân của chú chó **đầu tiên** và **cuối cùng** thực ra nuôi mèo chứ không phải chó! Vì vậy, hãy tạo một bản sao array của Julia và xóa tuổi mèo khỏi array đã sao chép đó (không nên thay đổi các tham số hàm).

—> cách 1 dùng phương thức map() để tạo bản sao cho mảng và pop , shift để lấy đi phẩn tử đầu/ cuối

—> cách 2 dùng slice để tạo bản sao chứa các phần từ 1 - (n-1)

- Tạo một array với cả dữ liệu của Julia (đã sửa) và của Kate.

—> dùng concat để nối arr Julia với arr Kate hoặc dùng spread để nối hai arr

- Đối với mỗi chú chó còn lại, hãy in ra console đó là chú chó trưởng thành (_"Dog number 1 is an adult, and is 5 years old"_) hay chó con (_"Dog number 2 is still a puppy"_).

—> dùng hàm filter để lọc ra giá trị pre >3 (là chó trưởng thành), pre < 3 là chó con

- Chạy hàm cho cả hai tập dữ liệu kiểm tra.

**2. Dữ liệu kiểm tra**

- Dữ liệu 1: Dữ liệu của Julia [3, 5, 2, 12, 7], dữ liệu của Kate [4, 1, 15, 8, 3]
- Dữ liệu 2: Dữ liệu của Julia [9, 16, 6, 8, 3], dữ liệu của Kate [10, 5, 6, 1, 4]

**Gợi ý:** Sử dụng các công cụ từ tất cả các bài giảng trong phần này.

**Lab 12.2: Chuyển đổi tuổi thú cưng**

Hãy quay trở lại nghiên cứu của Julia và Kate về loài chó. Lần này, họ muốn chuyển đổi tuổi chó sang tuổi người và tính tuổi trung bình của những con chó trong nghiên cứu của họ.

**1. Nhiệm vụ của bạn:**

Tạo hàm 'calcAverageHumanAge', hàm này nhận array tuổi của chó ('age') và thực hiện những việc sau theo thứ tự:

- Tính tuổi của chó theo năm như tuổi người theo công thức sau: if the dog is <= 2 years old, humanAge = 2 _ dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge _ 4.

—> dùng foreach để duyệt qua các giá trị trong mảng, sau đó dùng toán tử ba ngôi để tính tuổi chó ra tuổi người age ≤ 2 ? humanAge = 2 _ dogAge: humanAge = 16 + dogAge _ 4.

- Loại trừ tất cả những chú chó có humanAge dưới 18 (điều này cũng giống như việc giữ những chú chó có humanAge từ 18 tuổi trở lên).

—> để loại bỏ các chú chó có humanAge dưới 18 thì dùng filter với điều kiện humanAge > 18

- Tính humanage trung bình của các chú chó trưởng thành (bạn nên biết từ những thử thách khác về cách tính trung bình).

—> để tính tuổi trung bình dùng reduce(total, cur, index) với hàm trả về total =(total +cur)/(index +1)

- Chạy hàm cho hai tập dữ liệu kiểm tra.

**2. Dữ liệu kiểm tra:**

- Dữ liệu 1: [5, 2, 4, 1, 15, 8, 3]
- Dữ liệu 2: [16, 6, 10, 5, 6, 1, 4]
