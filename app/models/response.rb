class Response

  def initialize(obj)
    @http_obj = obj
  end

  def get_http_obj
    @http_obj
  end

  def get_chart_data
    chart_array = []
    
    self.get_http_obj.each do |response|
      individual_chart_data = []
      individual_chart_data << Time.at(response["timestamp"]).strftime("%A, %b %e")
      individual_chart_data << Time.at(response["timestamp"]).strftime("%l%p")
      individual_chart_data << response["charts"]["swell"]
      individual_chart_data << response["charts"]["wind"]
      chart_array << individual_chart_data
    end
    chart_array
  end
  
  def timestamp_to_object
    full_stats = {}
    prev_day = ""
    time_data = {}
    self.get_http_obj.each do |response|
      day = Time.at(response["timestamp"]).strftime("%A, %b %e")
      hour = Time.at(response["timestamp"]).strftime("%l%p")

      if day == prev_day
        time_data[hour] = { swell: response["swell"], wind: response["wind"], charts: response["charts"] }
        full_stats[day] = [time_data]
      else
        time_data = {}
        time_data[hour] = { swell: response["swell"], wind: response["wind"], charts: response["charts"] }
        full_stats[day] = [time_data]
      end
      prev_day = day
      
    end
    return full_stats
  end

end
