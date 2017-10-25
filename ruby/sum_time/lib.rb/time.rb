require "time"

class Time
  def to_sec
   sec + min * 60 + hour * 3600
  end

  def sum(seconds)
    total_time = self + seconds
    [total_time.sec, total_time.min,
     total_time.hour, total_time.day - Time.new().day]
  end
end
